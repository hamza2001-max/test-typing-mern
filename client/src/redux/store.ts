import {
  promptVisibilitySlice,
  testSettingsVSlice,
  themeVisibilitySlice,
} from "./visibilitySlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import {
  limiterPromptSlice,
  testLimiterSlice,
  testModeSlice,
  testModifierSlice,
} from "./testSettingsSlice";
import { inputStatusSlice } from "./inputStatusSlice";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  testMode: testModeSlice.reducer,
  testModifier: testModifierSlice.reducer,
  testLimiter: testLimiterSlice.reducer,
  isPromptVisible: promptVisibilitySlice.reducer,
  isTestSettingsVisible: testSettingsVSlice.reducer,
  isThemeVisible: themeVisibilitySlice.reducer,
  promptValue: limiterPromptSlice.reducer,
  isInputActive: inputStatusSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;