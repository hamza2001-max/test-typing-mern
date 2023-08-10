import { testSettingsVisibilitySlice } from "./testSettingsVisibilitySlice";
import { themeVisibilitySlice } from "./themeVisibilitySlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import { testLimiterSlice } from "./testLimiterSlice";
import { testFrameSlice } from "./testFrameSlice";
import { testModifierSlice } from "./testModifierSlice";
import { inputStatusSlice } from "./inputStatusSlice";
import { isTestFinishedSlice } from "./isTestFinishedSlice";
import { testOpacitySlice } from "./testOpacitySlice";
import { isCusLimVisibilitySlice } from "./cusLimVisibility";
import { loadState, saveState } from "./localStorageState";
import { authSlice } from "./authSlice";
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
  testFrame: testFrameSlice.reducer,
  testModifier: testModifierSlice.reducer,
  testLimiter: testLimiterSlice.reducer,
  isTestSetVisible: testSettingsVisibilitySlice.reducer,
  isThemeVisible: themeVisibilitySlice.reducer,
  isInputActive: inputStatusSlice.reducer,
  isTestFinished: isTestFinishedSlice.reducer,
  testOpacity: testOpacitySlice.reducer,
  isCusLimVisible: isCusLimVisibilitySlice.reducer,
});

const persistedState = loadState();
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    theme: store.getState().theme,
    testFrame: store.getState().testFrame,
    testModifier: store.getState().testModifier,
    testLimiter: store.getState().testLimiter,
  });
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
