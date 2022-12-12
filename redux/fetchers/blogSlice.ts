import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

const blogtSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
});

export const Posts = (state: any) => state.blog.posts;

export default blogtSlice.reducer;
