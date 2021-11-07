import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

const initialAuthState = {
  isAuthenticated: false,
};

const history = useHistory();

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log("REDUCER", action);
      state.isAuthenticated = true;
      history.push("/");
    },
    registerNewUser(state, action) {
      console.log("New user registration!");
      history.push("/");
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
