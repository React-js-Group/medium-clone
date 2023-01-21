import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {},
  reducers: {
    initProfile(state: any, action) {
      state.profile = action.payload
    },
  },
})

export const { initProfile } = profileSlice.actions

export default profileSlice.reducer
