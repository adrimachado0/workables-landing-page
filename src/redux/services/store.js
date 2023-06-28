import { configureStore } from "@reduxjs/toolkit";
import fixedReducer from '../features/fixedBody/fixedBody'

const store = configureStore({
    reducer:{
        fixed: fixedReducer,
    },
})

export default store;