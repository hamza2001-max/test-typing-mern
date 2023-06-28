import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPromptVisible: false,
};
export const promptVisibilitySlice = createSlice({
  name: "isPromptVisible",
  initialState,
  reducers: {
    visibleCustom: (state) => {
      state.isPromptVisible = true;
    },
    inVisibleCustom: (state) => {
      state.isPromptVisible = false;
    },
  },
});