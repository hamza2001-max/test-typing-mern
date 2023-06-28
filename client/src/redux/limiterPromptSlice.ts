import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  promptValue: 0,
};
export const limiterPromptSlice = createSlice({
  name: "promptValue",
  initialState,
  reducers: {
    setLimiterPrompt: (state, action) => {
      state.promptValue = action.payload;
    },
  },
});
