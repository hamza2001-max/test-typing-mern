import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInputActive: false,
};
export const inputStatusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    inActive: (state) => {
      state.isInputActive = false;
    },
    active: (state) => {
      state.isInputActive = true;
    },
  },
});
