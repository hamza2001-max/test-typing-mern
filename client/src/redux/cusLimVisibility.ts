import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCusLimVisible: false,
};

export const isCusLimVisibilitySlice = createSlice({
  name: "isCusLimVisible",
  initialState,
  reducers: {
    inVisibleCus: (state) => {
      state.isCusLimVisible = false;
    },
    visibleCus: (state) => {
      state.isCusLimVisible = true;
    },
  },
});
