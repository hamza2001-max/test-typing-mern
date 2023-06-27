import { createSlice } from "@reduxjs/toolkit";

const initialInputStatus = {
    isInputActive: false,
  };

export const inputStatusSlice = createSlice({
  name: "status",
  initialState: initialInputStatus,
  reducers: {
    inActive: (state) => {
      state.isInputActive = false;
    },
    active: (state) => {
      state.isInputActive = true;
    }
  }
});  

// export const inputStatusSlice = createSlice({
//   name: "status",
//   initialState: initialInputStatus.isInputActive,
//   reducers: {
//     inActive: (state) => {
//       state = false;
//     },
//     active: (state) => {
//       state.isInputActive = true;
//     }
//   }
// });