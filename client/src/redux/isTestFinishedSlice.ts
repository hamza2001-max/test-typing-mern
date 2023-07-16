import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTestFinished: false,
};
export const isTestFinishedSlice = createSlice({
  name: "isTestFinished",
  initialState,
  reducers: {
    testIsFinished: (state) => {
      state.isTestFinished = true;
    },
    testIsNotFinished: (state) => {
      state.isTestFinished = false;
    },
  },
});