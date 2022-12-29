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
export default authSlice.reducer;
