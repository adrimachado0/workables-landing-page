import { createSlice } from "@reduxjs/toolkit";

export const fixedBody = createSlice({
    name: 'fixed',
    initialState: {
        value: false
    },
    reducers: {
        fixedUnfixed: (state) => {
            state.value = !state.value
        },
    }
})

export const {
    fixedUnfixed
} = fixedBody.actions
export default fixedBody.reducer