import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../../types/products-type";

interface selectedProductInitialState {
    product: ProductType | null;
}

const initialState: selectedProductInitialState = { product: null}


const selectedProductSlice = createSlice({
    name: "selectedProduct",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            if(state){
                state.product = action.payload;
            }
        } 
    }
})

export const { setSelectedProduct } = selectedProductSlice.actions;

export default selectedProductSlice.reducer;