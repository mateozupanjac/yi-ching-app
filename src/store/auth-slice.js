import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      console.log("USER AUTHENTICATED");
      state.isAuthenticated = true;
    },
    logout(state) {
      console.log("USER LOG OUT");
      state.isAuthenticated = false;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
