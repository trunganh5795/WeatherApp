import { configureStore } from "@reduxjs/toolkit";
import { render } from "sass";
import weatherDataReducer from "./weatherDataReducer";
export const store = configureStore({
    reducer: {
       weatherDataReducer
    }
})
