import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api";

export const getProducts = createAsyncThunk("products/getProducts", async (_, { rejectWithValue }) => {
    try {  
        const response = await api.get("products");
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
       return rejectWithValue(error.message);
    }
});

export const getCategoriesProducts = createAsyncThunk("product/getCategoriesProducts", async ( category, { rejectWithValue }) => {
    try {
        const response = await api.get(`products?productCategory=${category}`);
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getSearchProducts = createAsyncThunk("product/getSearchProducts", async ( searchData, { rejectWithValue }) => {
    const search = searchData.search;
    const location = searchData.location;
    const filterLocation = location !== "" ? `?contactRegion=${location}` : ""
    console.log(filterLocation);
    try {
        const response = await api.get(`products${filterLocation}`);
        if (response.status === 200) {
            const products = response.data;
            const filteredProducts = products.filter(product => {
                for (const productKey in product) {
                    if (`${product[productKey]}`.toLowerCase().includes(search)) {
                        return product
                    }
                }
            }
            )
            return filteredProducts
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
})



export const postProducts = createAsyncThunk("products/postProducts", async ( product, { rejectWithValue, dispatch }) => {
    try {  
        const response = await api.post("products", product );
        if (response.status === 201) {
            dispatch(addProduct(product))
        }
    } catch (error) {
       return rejectWithValue(error.message);
    }
});


const initialState = {
    products: [],
    loading: null,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.products = [...state.products, payload];
        }

    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.products = payload;
            state.loading = "fulfilled";
            state.error = null;
        },
        [getProducts.rejected]: (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload;
        },

        [getCategoriesProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [getCategoriesProducts.fulfilled]: (state, { payload }) => {
            state.products = payload;
            state.loading = "fulfilled";
            state.error = null;
        },
        [getCategoriesProducts.rejected]: (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload;
        },
        
        [getSearchProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },

        [getSearchProducts.fulfilled]: (state, { payload }) => {
            state.products = payload;
            state.loading = "fulfilled";
            state.error = null;
        },

        [getSearchProducts.rejected]: (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload;
        },
        
        [postProducts.pending]: (state,) => {
            state.loading = "pending";
            state.error = null;
        },
        [postProducts.fulfilled]: (state) => {
            state.loading = "fulfilled";
            state.error = null;
        },
        [postProducts.rejected]: (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload;
        },
    }
});

export default productsSlice.reducer;
export const { addProduct } = productsSlice.actions;