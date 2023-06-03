import { createSlice } from "@reduxjs/toolkit";

const initialTestMode = {
  testMode: "words",
};
export const testModeSlice = createSlice({
  name: "testMode",
  initialState: initialTestMode,
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

const initialTestModifier = {
  testModifier: "",
};
export const testModifierSlice = createSlice({
  name: "testModifier",
  initialState: initialTestModifier,
  reducers: {
    punctuation: (state) => {
      state.testModifier = "punctuation";
    },
    numbers: (state) => {
      state.testModifier = "numbers";
    },
    reset: () => {
      return initialTestModifier;
    },
  },
});

const initialTestLimiter = {
  testLimiter: 25 as string | number,
};
export const testLimiterSlice = createSlice({
  name: "testLimiter",
  initialState: initialTestLimiter,
  reducers: {
    testLimiterReducer: (state, action) => {
      state.testLimiter = action.payload;
    },
  },
});

const initialLimiterPrompt = {
  promptValue: 0,
};

export const limiterPromptSlice = createSlice({
  name: "promptValue",
  initialState: initialLimiterPrompt,
  reducers: {
    setLimiterPrompt: (state, action) => {
      state.promptValue = action.payload;
    },
  },
});
