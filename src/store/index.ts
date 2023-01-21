import { configureStore } from '@reduxjs/toolkit'

import blog from './fetchers/blogSlice'
import auth from './fetchers/authSlice'
import user from './fetchers/userSlice'
import profile from './fetchers/profileSlice'

export const store = configureStore({
  reducer: { blog, auth, user, profile },
})
