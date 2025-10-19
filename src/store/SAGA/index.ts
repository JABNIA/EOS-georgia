import { call, put, takeLatest } from "redux-saga/effects";
import { supabase } from "../../supabase";
import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from "../reducers/products/products";

export function *getProductData() {
    try {
        const {data, error} = yield call([supabase.from("Products"), "select",])
        if(error) throw error;
        yield put(fetchProductsSuccess(data))
    }catch (error: any){
        yield put(fetchProductsFailure(error.message))
    }
}


export function* watchProductsSaga(){
    yield takeLatest(fetchProductsRequest.type, getProductData)
}