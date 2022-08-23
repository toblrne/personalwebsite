import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: "light",
}

export const toggleSlice = createSlice({
    name: "toggleMode",
    initialState,
    reducers: {
        toggle: (state) => {
            (state.mode === "light" ? state.mode = "dark" : state.mode = "light")

        }
    }
})

export const { toggle } = toggleSlice.actions

export default toggleSlice.reducer