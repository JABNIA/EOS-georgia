import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../../types/products-type";


interface ProductsInterface {
    products: Product[];
    status: "idle" | "loading" | "succeeded" | "failed" ;
    error: string | null
}

const initialState: ProductsInterface = {
    products: [],
    status: "idle" ,
    error: null,
} 


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProductsRequest: (state) => {
            state.status = "loading"
        },
        fetchProductsSuccess: (state, action) => {
            state.status = "succeeded"
            state.products = action.payload
        },
        fetchProductsFailure: (state, action) => {
            state.status = "failed"
            state.products = []
            state.error = action.payload
        },

    },
})

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions


export default productsSlice.reducer