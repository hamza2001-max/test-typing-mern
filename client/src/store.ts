import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./redux/themeSlice";
import { testLimiterSlice, testModeSlice, testModifierSlice } from "./redux/testSettingsSlice";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  testMode: testModeSlice.reducer,
  testModifier: testModifierSlice.reducer,
  testLimiter: testLimiterSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
