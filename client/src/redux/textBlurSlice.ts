import { createSlice } from "@reduxjs/toolkit";

const textBlurInitialState = {
    blur: false,
  };

export const textBlurSlice = createSlice({
  name: "blur",
  initialState: textBlurInitialState,
  reducers: {
    NoBlur: (state) => {
      state.blur = false;
    },
    blur: (state) => {
      state.blur = true;
    }
  }
});  

