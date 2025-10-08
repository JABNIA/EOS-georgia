import { configureStore } from "@reduxjs/toolkit";
import CategoryMenuReducer from "./reducers/categoryMenu/index"; 


export const appStore = configureStore({
  reducer: {
    CategoryMenu: CategoryMenuReducer,
  },
});


export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;