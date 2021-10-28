import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  authInitialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
  },
});

export default authSlice.reducer;
