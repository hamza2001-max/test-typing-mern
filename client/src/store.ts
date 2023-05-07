import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { themeSlice } from "./redux/themeSlice";
import { testModeSlice } from "./redux/testModeSlice";

const rootReducer = combineReducers({
  testMode:testModeSlice.reducer,
  theme:themeSlice.reducer
})

const store = configureStore({
  reducer: rootReducer
});

export default store;