import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTestSettingsVisible: false,
};
export const testSettingsVisibilitySlice = createSlice({
  name: "testSettingsV",
  initialState,
  reducers: {
    visibleTS: (state) => {
      state.isTestSettingsVisible = true;
    },
    inVisibleTS: (state) => {
      state.isTestSettingsVisible = false;
    },
  },
});
