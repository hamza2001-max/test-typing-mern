import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testMode: "words",
};
export const testModeSlice = createSlice({
  name: "testMode",
  initialState,
  reducers: {
    setTimeMode: (state) => {
      state.testMode = "time";
    },
    setWordsMode: (state) => {
      state.testMode = "words";
    },
    setQuoteMode: (state) => {
      state.testMode = "quote";
    },
    setZenMode: (state) => {
      state.testMode = "zen";
    },
    setCustomMode: (state) => {
      state.testMode = "custom";
    },
  },
});
