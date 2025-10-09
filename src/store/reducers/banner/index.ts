import { createSlice } from "@reduxjs/toolkit";

interface banner {
    scrollPlace: number,
}

const initialState: banner = {
    scrollPlace: 0,
};

const bannerReducer = createSlice({
    name: 'banner-slider',
    initialState,
    reducers: {
        setScroll: (state, action) => {
            state.scrollPlace = action.payload;
        },
    }
})

export const { setScroll } = bannerReducer.actions;

export default bannerReducer.reducer;