import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../../types/products-type";

interface ProductsInterface {
    products: Product[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: ProductsInterface = {
    products: [],
    status: "idle",
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProductsRequest: (state) => {
            state.status = "loading";
        },
        fetchProductsSuccess: (state, action) => {
            state.status = "succeeded";
            state.products = action.payload;
        },
        fetchProductsFailure: (state, action) => {
            state.status = "failed";
            state.products = [];
            state.error = action.payload;
        },
        deleteProductsTodo: (state, _action) => {
            state.status = "loading"
        },
        deleteProductsSuccess: (state, action) => {
            state.status = "succeeded";
            state.products = action.payload;
        },
        deleteProductsFailure: (state, action) => {
            state.status = "failed"
            state.error = action.payload;
            state.products = [];
        },
        updateProductsTodo: (state, _action) => {
            state.status = "loading"
        },
        updateProductsSuccess: (state, action) => {
            state.status = "succeeded"
            state.products = action.payload
        },
        updateProductsFailure: (state, action) => {
            state.status = "failed";
            state.products = [];
            state.error = action.payload;
        },
    },
});

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    deleteProductsTodo,
    deleteProductsSuccess,
    deleteProductsFailure,
    updateProductsTodo,
    updateProductsSuccess,
    updateProductsFailure
} = productsSlice.actions;

export default productsSlice.reducer;
