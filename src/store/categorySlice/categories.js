import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    visible: false,
}

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setVisibleCategory: (state, { payload }) => {
            state.visible = payload;
        },
        setRouterValue: (state, { payload }) => {
            state.routerValue = payload;
        },
        setCategoryValue: (state, { payload }) => {
            state.categoryValue = payload;
        },
        getCategories: (state, { payload }) => {
            state.categories = payload
        }
    }
});

export default categorySlice.reducer;
export const { 
    setCategoryValue, 
    setRouterValue, 
    setVisibleCategory,
    getCategories } = categorySlice.actions;