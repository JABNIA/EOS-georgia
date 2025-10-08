import { createSlice } from "@reduxjs/toolkit";

interface CategoryMenuState {
    open: boolean,
    category: string,
    inMenu: boolean,
}

const initialState: CategoryMenuState = {
    open: false,
    category: '',
    inMenu: false,
};

const categoryMenuReducer = createSlice({
    name: 'categoryMenu',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.open = true;
        },
        closeMenu: (state) => {
            state.open = false;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setInMenu: (state, action) => {
            state.inMenu = action.payload;
        }
    }
})

export const { openMenu, closeMenu, setCategory, setInMenu } = categoryMenuReducer.actions;

export default categoryMenuReducer.reducer;
