import { configureStore } from "@reduxjs/toolkit";
import CategoryMenuReducer from "./reducers/categoryMenu/index";
import BannerReducer from "./reducers/banner/index";
import ProductSlice from "./reducers/products/products";
import ModalSlice from "./reducers/modalReducer/modals";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./SAGA/RootSAGA";

const sagaMiddleware = createSagaMiddleware();

export const appStore = configureStore({
    reducer: {
        CategoryMenu: CategoryMenuReducer,
        Banner: BannerReducer,
        Products: ProductSlice,
        Modal: ModalSlice,
    },
    middleware: (getDefaultmiddleware) =>
        getDefaultmiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
