import { createSlice } from "@reduxjs/toolkit"

interface modalsInterface {
    isOpen: boolean,
    type: string,
}

const initialState = {
    isOpen: true,
    type: ""
}

const modalsSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        setModalType: (state, action) => {
            state.type = action.payload
        }
    }
})


export const { openModal, closeModal, setModalType } = modalsSlice.actions;

export default modalsSlice.reducer;