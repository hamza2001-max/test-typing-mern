import { createSlice } from "@reduxjs/toolkit";

const customPromptVInitialState = {
  customPromptV: false,
};
export const customPromptVSlice = createSlice({
  name: "customPromptV",
  initialState: customPromptVInitialState,
  reducers: {
    visibleCustom: (state) => {
      state.customPromptV = true;
    },
    inVisibleCustom: (state) => {
      state.customPromptV = false;
    },
  },
});

const themeVInitialState = {
  themeV: false,
};
export const themeVSlice = createSlice({
  name: "themeV",
  initialState: themeVInitialState,
  reducers: {
    visibleTheme: (state) => {
      state.themeV = true;
    },
    inVisibleTheme: (state) => {
      state.themeV = false;
    },
  },
});

const testSettingsVInitialState = {
  testSettingsV: false,
};
export const testSettingsVSlice = createSlice({
  name: "testSettingsV",
  initialState: testSettingsVInitialState,
  reducers: {
    visibleTS: (state) => {
      state.testSettingsV = true;
    },
    inVisibleTS: (state) => {
      state.testSettingsV = false;
    },
  },
});
