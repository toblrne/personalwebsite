import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: "light",
}

export const toggleSlice = createSlice({ // 1
    name: "toggleMode", // 2
    initialState,
    reducers: {
        toggle: (state) => { // 3
            (state.mode === "light" ? state.mode = "dark" : state.mode = "light")

        }
    }
})

export const { toggle } = toggleSlice.actions // 3

export default toggleSlice.reducer // 1