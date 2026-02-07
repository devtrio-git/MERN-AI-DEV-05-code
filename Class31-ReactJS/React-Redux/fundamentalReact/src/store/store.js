import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import cartReducer from './slices/cartSlice'
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer
    }
})

// https://redux-toolkit.js.org/tutorials/quick-start