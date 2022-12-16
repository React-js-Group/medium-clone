import { createSlice } from "@reduxjs/toolkit";

interface initialStateInfo {
  displayForm: boolean;
}

const initialState: initialStateInfo = {
  displayForm: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggle(state) {
      state.displayForm = !state.displayForm;
    },
  },
});

export const { toggle } = authSlice.actions;
export default authSlice.reducer;
