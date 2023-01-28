import { createSlice } from '@reduxjs/toolkit'

interface initialStateInfo {
    loading: boolean
    displayForm: boolean
    access: string
    refresh: string
}

const initialState: initialStateInfo = {
    loading: false,
    displayForm: false,
    access: '',
    refresh: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loading(state) {
            state.loading = !state.loading
        },
        toggle(state) {
            state.displayForm = !state.displayForm
        },
        toggleAccess(state, action) {
            state.displayForm = action.payload
        },
        access(state, action) {
            state.access = action.payload
        },
        refresh(state, action) {
            state.refresh = action.payload
        },
    },
})

export const { toggle, access, refresh, loading, toggleAccess } =
    authSlice.actions
export const accessToken = (state: any) => state.auth.access
export const displayForm = (state: any) => state.auth.displayForm
export default authSlice.reducer
