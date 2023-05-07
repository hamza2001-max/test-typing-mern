import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state) => {
      state.theme = "";
    },
    dark: (state) => {
      state.theme = "dark";
    },
    afterDark: (state) => {
      state.theme = "afterDark"
    },
    retrocast: (state) => {
      state.theme = "retrocast"
    }
  },
});
