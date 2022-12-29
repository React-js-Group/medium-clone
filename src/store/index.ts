import { configureStore } from "@reduxjs/toolkit";

import blog from "./fetchers/blogSlice";
import auth from "./fetchers/authSlice";

export const store = configureStore({
  reducer: { blog, auth },
});
