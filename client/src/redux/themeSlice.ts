import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
  theme: "light",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    light: (state) => {
      state.theme = "light";
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
    trance: (state) => {
      state.theme = "trance";
    },
    desertOasis: (state) => {
      state.theme = "desertOasis";
    },
    ourTheme: (state) => {
      state.theme = "ourTheme";
    },
    tronOrange: (state) => {
      state.theme = "tronOrange";
    },
  },
});
