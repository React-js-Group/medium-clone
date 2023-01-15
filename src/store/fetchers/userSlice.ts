import { createSlice } from '@reduxjs/toolkit'

interface IProfile {
  id: number
  name: string
  family: string
  username: string
  about: string
  email: string
  followers: number
  skils: string
  profile: string
}

const initialState = {
  profile: <IProfile>{
    id: 0,
    name: '',
    family: '',
    username: '',
    about: '',
    email: '',
    followers: 0,
    skils: '',
    profile: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile(state: any, action) {
      state.profile = action.payload
    },
  },
})

export const { setProfile } = userSlice.actions

export default userSlice.reducer
