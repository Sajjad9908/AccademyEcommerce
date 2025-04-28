import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './AddCartSlice'

export const store=configureStore({
    reducer:{
     cart:cartReducer,
    },
})