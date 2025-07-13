// src/features/auth/authSlice.ts (optional if you want Redux state)
import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("accessToken") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    //   console.log(state.token);
    //   console.log("Setting token in localStorage:", action.payload); // debug
      localStorage.setItem("accessToken", action.payload);
    },
    logout: (state) => {
      state.token = "";
      localStorage.removeItem("accessToken");
    },
  },
});

export const selectAuthToken = (state: RootState) => state.auth.token;

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
