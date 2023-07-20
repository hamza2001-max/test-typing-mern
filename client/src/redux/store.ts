import { testSettingsVisibilitySlice } from "./testSettingsVisibilitySlice";
import { themeVisibilitySlice } from "./themeVisibilitySlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import { testLimiterSlice } from "./testLimiterSlice";
import { testModeSlice } from "./testModeSlice";
import { testModifierSlice } from "./testModifierSlice";
import { inputStatusSlice } from "./inputStatusSlice";
import { isTestFinishedSlice } from "./isTestFinishedSlice";
import { testOpacitySlice } from "./testOpacitySlice";
const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  testMode: testModeSlice.reducer,
  testModifier: testModifierSlice.reducer,
  testLimiter: testLimiterSlice.reducer,
  isTestSettingsVisible: testSettingsVisibilitySlice.reducer,
  isThemeVisible: themeVisibilitySlice.reducer,
  isInputActive: inputStatusSlice.reducer,
  isTestFinished: isTestFinishedSlice.reducer,
  testOpacity: testOpacitySlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
