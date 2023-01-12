import { configureStore } from '@reduxjs/toolkit'

import blog from './fetchers/blogSlice'
import auth from './fetchers/authSlice'
import user from './fetchers/userSlice'

export const store = configureStore({
  reducer: { blog, auth, user },
})
