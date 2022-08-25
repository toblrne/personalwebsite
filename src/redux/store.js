import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./mode"

export default configureStore({
    reducer: {
        toggleMode: toggleReducer // 2
    }
})