import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  userId: number;
  username: string;
  token: string;
  joinedDate: Date;
  profilePicture: string;
  testStd: number;
  testCpl: number;
  timeTyping: number;
}

interface IAuthSlice {
  user: IAuthState | null;
}

const initialState: IAuthSlice = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    incTestStd: (state) => {
      state.user!.testStd += 1;
    },
    incTestCpl: (state) => {
      state.user!.testCpl += 1;
    },
    updateTimeTyping: (state, action) => {
      state.user!.timeTyping += action.payload;
    },
  },
});
