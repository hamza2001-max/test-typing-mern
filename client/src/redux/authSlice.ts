import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signup: (state, action) => {
            state.user = action.payload;
        },
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})