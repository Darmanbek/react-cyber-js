import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locations: []
}

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: { 
        getLocations: (state, { payload }) => {
            state.locations = payload;
        }
    }
});

export default locationSlice.reducer;
export const { getLocations } = locationSlice.actions;