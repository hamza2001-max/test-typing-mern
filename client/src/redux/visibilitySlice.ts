import { createSlice } from "@reduxjs/toolkit";

const initialPromptVisibility = {
  isPromptVisible: false,
};
export const promptVisibilitySlice = createSlice({
  name: "isPromptVisible",
  initialState: initialPromptVisibility,
  reducers: {
    visibleCustom: (state) => {
      state.isPromptVisible = true;
    },
    inVisibleCustom: (state) => {
      state.isPromptVisible = false;
    },
  },
});

const initialThemeVisibility  = {
  isThemeVisible: false,
};
export const themeVisibilitySlice = createSlice({
  name: "isThemeVisible",
  initialState: initialThemeVisibility,
  reducers: {
    visibleTheme: (state) => {
      state.isThemeVisible = true;
    },
    inVisibleTheme: (state) => {
      state.isThemeVisible = false;
    },
  },
});

const initialTestSettingsVisibility  = {
  isTestSettingsVisible: false,
};
export const testSettingsVSlice = createSlice({
  name: "testSettingsV",
  initialState: initialTestSettingsVisibility,
  reducers: {
    visibleTS: (state) => {
      state.isTestSettingsVisible = true;
    },
    inVisibleTS: (state) => {
      state.isTestSettingsVisible = false;
    },
  },
});
