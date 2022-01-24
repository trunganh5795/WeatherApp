import { createSlice } from "@reduxjs/toolkit";
export const weatherDataReducerSlice = createSlice({
    name: "weather_data",
    initialState: {
        value: {},
        msg:""
    },
    reducers: {
        addData: (state, action) => {
            state.value = action.payload;
            state.msg = ""
            // return state
        },
        notFoundCity: (state) => {
            state.msg = "N/A" 
        }
    }
})
export const { addData, notFoundCity } = weatherDataReducerSlice.actions;
export default weatherDataReducerSlice.reducer;
