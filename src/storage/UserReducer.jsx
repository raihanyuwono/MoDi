import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : null,
}

export const UserReducer = createSlice({
    name: "UserReducer",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            const token = action.payload;
            localStorage.setItem('token', token);
            state.token = localStorage.getItem('token');
        },
        userLogout: (state) => {
            localStorage.setItem("token", null);
            state.token = null;
        }
    }
});

export const {userLogin, userLogout} = UserReducer.actions; 
export default UserReducer.reducer;