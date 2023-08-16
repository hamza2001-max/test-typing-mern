import { createSlice } from "@reduxjs/toolkit";
import { IAuthSlice } from "../types";

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
    },
    incTestStd: (state) => {
      state.user!.testStd += 1;
    },
    incTestCpl: (state) => {
      state.user!.testCpl += 1;
    },
    updateTimeTyping: (state, action) => {
      state.user!.timeTyping += action.payload;
    },
  },
});
