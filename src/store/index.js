import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice/products";
import locations from "./locationSlice/locations";
import categories from "./categorySlice/categories";

const store = configureStore({
    reducer: {
        products,
        locations,
        categories,
    }
});

export default store;