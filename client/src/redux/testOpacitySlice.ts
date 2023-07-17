import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testOpacity: true,
};

export const testOpacitySlice = createSlice({
  name: "testOpacity",
  initialState,
  reducers: {
    opacity: (state) => {
        state.testOpacity = true;
    },
    noOpacity: (state) => {
        state.testOpacity = false;
    }
  },
});
