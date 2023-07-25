import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isThemeVisible: false,
};
export const themeVisibilitySlice = createSlice({
  name: "isThemeVisible",
  initialState,
  reducers: {
    visibleTheme: (state) => {
      state.isThemeVisible = true;
    },
    inVisibleTheme: (state) => {
      state.isThemeVisible = false;
    },
  },
});
