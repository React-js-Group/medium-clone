import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import blog from "./fetchers/blogSlice";
import authReducer from "./fetchers/authSlice";

import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage, version: 1 };
const auth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { blog, auth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
