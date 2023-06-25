import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./AuthReducer"
export const Storage = configureStore({
    reducer: {
        auth : AuthReducer,
    },
})