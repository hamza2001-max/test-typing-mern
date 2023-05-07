import { configureStore, createSlice } from "@reduxjs/toolkit";
import { themeSlice } from "./redux/themeSlice";
const initialValue = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
const store = configureStore({
  reducer: themeSlice.reducer,
});

export default store;