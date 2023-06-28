import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testLimiter: 25 as string | number,
};
export const testLimiterSlice = createSlice({
  name: "testLimiter",
  initialState,
  reducers: {
    testLimiterReducer: (state, action) => {
      state.testLimiter = action.payload;
    },
  },
});
