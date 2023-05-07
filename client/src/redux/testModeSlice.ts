import { createSlice } from "@reduxjs/toolkit";

const testModeInitialState = {
  testMode: "words",
};

export const testModeSlice = createSlice({
  name: "testMode",
  initialState: testModeInitialState,
  reducers: {
    time: (state) => {
      state.testMode = "time";
    },
    words: (state) => {
      state.testMode = "words";
    },
    quote: (state) => {
      state.testMode = "quote";
    },
    zen: (state) => {
      state.testMode = "zen";
    },
    custom: (state) => {
      state.testMode = "custom";
    },
  },
});
