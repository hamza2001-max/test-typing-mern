import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testModifier: "",
};
export const testModifierSlice = createSlice({
  name: "testModifier",
  initialState,
  reducers: {
    punctuation: (state) => {
      state.testModifier = "punctuation";
    },
    numbers: (state) => {
      state.testModifier = "numbers";
    },
    dual: (state) => {
      state.testModifier = "dual";
    },
    reset: () => {
      return initialState;
    },
  },
});
