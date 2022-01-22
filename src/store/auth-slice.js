import { createSlice } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";

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
      state.error = null;
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      console.log("USER LOG OUT");
      localStorage.clear();
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

export const sendHttp = (requestConfig) => {
  return async (dispatch) => {
    // Starts the loader
    dispatch(startLoading());

    // Sends request to the firebase api
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

      if (!res.ok) {
        throw new Error("Request failed! Something went wrong!");
      }
      return res.json();
    };

    try {
      // Retrieves data from the request that has been sent
      const data = await sendRequest();

      // Log in/Sign up user
      if (data.idToken) {
        localStorage.setItem("token", `${data.idToken}`);
        //localStorage.setItem("expiresIn", logoutExpirationTime);
        dispatch(stopLoading());
        dispatch(login(data.idToken));
      }
    } catch (err) {
      // catches and shows error if there is some
      // redirects the user to the login page
      console.log(err.message);
      dispatch(stopLoading());
      dispatch(setError(err.message));
    }
  };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
