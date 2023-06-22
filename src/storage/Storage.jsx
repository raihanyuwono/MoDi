import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./UserReducer"
export const Storage = configureStore({
    reducer: {
        user : UserReducer,
    },
})