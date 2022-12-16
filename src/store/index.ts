import { configureStore } from "@reduxjs/toolkit";
import blog from "./fetchers/blogSlice";

export const store = configureStore({
  reducer: { blog },
});
