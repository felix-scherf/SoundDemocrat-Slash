import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        id: 0,
        token: "",
    },
    reducers: {
        set: (state, action) => {
            state.id = action.payload.id;
            state.token = action.payload.token;
        }
    }
})

export const { set } = sessionSlice.actions

export default sessionSlice.reducer