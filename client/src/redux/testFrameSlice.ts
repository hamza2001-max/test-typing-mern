import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testFrame: "words",
};
export const testFrameSlice = createSlice({
  name: "testFrame",
  initialState,
  reducers: {
    setTimeMode: (state) => {
      state.testFrame = "time";
    },
    setWordsMode: (state) => {
      state.testFrame = "words";
    },
    setQuoteMode: (state) => {
      state.testFrame = "quote";
    },
    setZenMode: (state) => {
      state.testFrame = "zen";
    },
    setCustomMode: (state) => {
      state.testFrame = "custom";
    },
  },
});
