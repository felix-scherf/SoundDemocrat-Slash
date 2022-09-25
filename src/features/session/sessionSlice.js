import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        id: 0,
        token: "",
        creator: false,
        playerinit: true,
    },
    reducers: {
        set: (state, action) => {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.creator = action.payload.creator;
            state.playerinit = action.payload.playerinit;
        },
        init: (state) => {
            state.playerinit = true;
        }
    }
})

export const { set, init } = sessionSlice.actions

export default sessionSlice.reducer