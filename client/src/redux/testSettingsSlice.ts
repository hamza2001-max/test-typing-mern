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

const testModifierInitialState = {
  testModifier: "",
};

export const testModifierSlice = createSlice({
  name: "testModifier",
  initialState: testModifierInitialState,
  reducers: {
    punctuation: (state) => {
      state.testModifier = "punctuation";
    },
    numbers: (state) => {
      state.testModifier = "numbers";
    },
    reset: () => {
      return testModifierInitialState;
    },
  },
});

const testLimiterInitialState = {
  testLimiter: <string | number>"",
};

export const testLimiterSlice = createSlice({
  name: "testLimiter",
  initialState: testLimiterInitialState,
  reducers: {
    testLimiterReducer: (state, action) => {
      state.testLimiter = action.payload;
    },
  },
});
