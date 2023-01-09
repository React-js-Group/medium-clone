import { createSlice } from "@reduxjs/toolkit";

interface initialStateInfo {
  displayForm: boolean;
  access: string;
  refresh: string;
}

const initialState: initialStateInfo = {
  displayForm: false,
  access: "",
  refresh: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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

export const { toggle, access, refresh } = authSlice.actions;
export const accessToken = (state: any) => state.auth.access;
export const displayForm = (state: any) =>
  state.auth.displayForm;
export default authSlice.reducer;
