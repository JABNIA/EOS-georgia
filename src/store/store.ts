import { configureStore } from "@reduxjs/toolkit";
import CategoryMenuReducer from "./reducers/categoryMenu/index"; 
import BannerReducer from "./reducers/banner/index";


export const appStore = configureStore({
  reducer: {
    CategoryMenu: CategoryMenuReducer,
    Banner: BannerReducer,
  },
});


export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;