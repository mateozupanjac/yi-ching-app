import { createSlice } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";
//let logoutTimer;

const initialAuthState = {
  isAuthenticated: !!localStorage.getItem("token"),
  isLoading: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log("USER AUTHENTICATED");
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout(state) {
      console.log("USER LOG OUT");
      localStorage.clear();
      //if (logoutTimer) {
      //  clearTimeout(logoutTimer);
      //}
      state.token = null;
      state.isAuthenticated = false;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

const { login, startLoading, stopLoading, setError } = authSlice.actions;

//const calculateRemainingTime = (expirationTime) => expirationTime - Date.now();

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
        throw new Error("Request failed! Something went wrong!");
      }
      return res.json();
    };

    try {
      const data = await sendRequest();

      // AUTO-LOGOUT AFTER 1 HOUR -- OPTIONAL
      //const logoutExpirationTime = Date.now() + data.expiresIn * 1000;
      //logoutTimer = setTimeout(() => {
      //  dispatch(logout());
      //}, logoutExpirationTime);

      // Log in/Sign up user
      if (data.idToken) {
        localStorage.setItem("token", `${data.idToken}`);
        //localStorage.setItem("expiresIn", logoutExpirationTime);
        dispatch(stopLoading());
        dispatch(login(data.idToken));
      }
    } catch (err) {
      // catching and showing error if there is some
      // redirecting the user to the login page
      console.log(err.message);
      dispatch(stopLoading());
      dispatch(setError(err.message));
    }
  };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
