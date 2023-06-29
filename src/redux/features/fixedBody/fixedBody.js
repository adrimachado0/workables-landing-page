import { createSlice } from "@reduxjs/toolkit";

export const fixedBody = createSlice({
    name: 'fixed',
    initialState: {
        value: false
    },
    reducers: {
        fixedUnfixed: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {
    fixedUnfixed
} = fixedBody.actions
export default fixedBody.reducer