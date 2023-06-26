import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories : [],
}

export const BlogReducer = createSlice({
    name: "BlogReducer",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            const categories = action.payload;
            state.categories = categories;
        },
    }
})

export const {setCategory} = BlogReducer.actions;
export default BlogReducer.reducer;