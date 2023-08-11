import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    username: string;
    token: string;
    joinedDate: Date;
    profilePicture: string;
}

interface IAuthSlice {
    user: IAuthState | null;
}

const initialState: IAuthSlice = {
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