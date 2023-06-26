import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./AuthReducer"
import BlogReducer from "./BlogReducer"

export const Storage = configureStore({
    reducer: {
        auth : AuthReducer,
        blog : BlogReducer
    },
})