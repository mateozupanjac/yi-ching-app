import { createSlice } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";

const initialAuthState = {
  isAuthenticated: localStorage.getItem("token"),
  isLoading: false,
  token: null,
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
      localStorage.removeItem("user");
      state.token = null;
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
      return res.json();
    };

    try {
      const data = await sendRequest();

      // const userData = {
      //   idToken: data.idToken,
      //   expiresIn: data.expiresIn,
      // };

      localStorage.setItem("token", `${data.idToken}`);

      // Log in/Sign up user
      // Set token
      dispatch(stopLoading());
      dispatch(login(data.idToken));
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
