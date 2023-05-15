import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
  theme: "",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    light: (state) => {
      state.theme = "";
    },
    dark: (state) => {
      state.theme = "dark";
    },
    afterDark: (state) => {
      state.theme = "afterDark";
    },
    retrocast: (state) => {
      state.theme = "retrocast";
    },
    laser: (state) => {
      state.theme = "laser";
    },
    matrix: (state) => {
      state.theme = "matrix";
    },
  },
});
