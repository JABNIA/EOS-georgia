import { call, put, takeLatest } from "redux-saga/effects";
import { supabase } from "../../supabase";
import {
    deleteProductsTodo,
    fetchProductsFailure,
    fetchProductsRequest,
    fetchProductsSuccess,
    updateProductsFailure,
    updateProductsSuccess,
    updateProductsTodo,
} from "../reducers/products/products";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/products-type";

export function* getProductData() {
    try {
        const { data, error } = yield call([
            supabase.from("Products"),
            "select",
        ]);
        if (error) throw error;
        yield put(fetchProductsSuccess(data));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* deleteProduct(action: PayloadAction<{id: number }>){
    const { id } = action.payload
    try{
        const { deletionError } = yield call(() => {
            return supabase.from("Products").delete().eq("id", id)
        }
        )
        
        if (deletionError) console.error(deletionError);
        
        const { data, error } = yield supabase.from("Products").select()
        
        if (error) throw error

        yield put(fetchProductsSuccess(data));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* updateProduct(action: PayloadAction<Product>){
    const updatedProduct = action.payload

    try {
        const { updateError } = yield call(() => supabase.from("Products").update({}).eq("id", updatedProduct.id))
    
        if (updateError) throw updateError;

        const { data, error } = yield supabase.from("Products").select()

        if (error) throw error
        yield put(updateProductsSuccess(data));
    }catch (error: any){
        yield put(updateProductsFailure(error.message))
    }
}


export function* watchProductsSaga() {
    yield takeLatest(fetchProductsRequest.type, getProductData);
    yield takeLatest(deleteProductsTodo.type, deleteProduct);
    yield takeLatest(updateProductsTodo.type, updateProduct);
}


