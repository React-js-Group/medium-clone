import { createSlice } from "@reduxjs/toolkit";

interface initialStateInfo {
  loading: boolean;
  displayForm: boolean;
  access: string;
  refresh: string;
}

const initialState: initialStateInfo = {
  loading: false,
  displayForm: false,
  access: "",
  refresh: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading(state) {
      state.loading = !state.loading;
    },
    toggle(state) {
      state.displayForm = !state.displayForm;
    },
    access(state, action) {
      state.access = action.payload;
    },
    refresh(state, action) {
      state.refresh = action.payload;
    },
  },
});

export const { toggle, access, refresh, loading } = authSlice.actions;
export default authSlice.reducer;
