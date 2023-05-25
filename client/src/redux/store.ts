import {
  customPromptVSlice,
  testSettingsVSlice,
  themeVSlice,
} from "./visibilitySlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import {
  limiterPromptSlice,
  testLimiterSlice,
  testModeSlice,
  testModifierSlice,
} from "./testSettingsSlice";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  testMode: testModeSlice.reducer,
  testModifier: testModifierSlice.reducer,
  testLimiter: testLimiterSlice.reducer,
  customPromptV: customPromptVSlice.reducer,
  testSettingsV: testSettingsVSlice.reducer,
  themeV: themeVSlice.reducer,
  promptValue: limiterPromptSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
