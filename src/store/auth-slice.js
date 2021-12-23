import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";

const initialAuthState = {
  isAuthenticated: false,
  isLogin: false,
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
      state.isLogin = false;
      state.isDemoLogin = false;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setIsLogin(state, action) {
      state.isLogin = true;
    },
  },
});

const { login, startLoading, stopLoading } = authSlice.actions;

export const sendHttp = (requestConfig) => {
  return async (dispatch) => {
    // Starts the loader
    dispatch(startLoading());

    // Signin in or up
    const sendRequest = async () => {
      const res = await fetch(`${requestConfig.url}${API_KEY}`, {
        method: requestConfig.method,
        body: JSON.stringify({ ...requestConfig.body }) || {
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Throws error if there is some
      if (!res.ok) {
        throw new Error();
      }
    };

    try {
      await sendRequest();
      console.log("Request sent");

      // Login or signin up the user
      // Redirecting user to yi-ching page
      // const data = await response.json();
      // console.log(data);

      dispatch(stopLoading());
      dispatch(login());
    } catch (err) {
      // catching and showing error if there is some
      // redirecting the user to the login page
      console.log(err.message);
      dispatch(stopLoading());
    }
  };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
