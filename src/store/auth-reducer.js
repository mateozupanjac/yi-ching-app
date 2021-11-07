import { createSlice } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";

const sendHttp = async (userData) => {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: userData.userName,
          password: userData.password,
        }),
        "Content-Type": "application/json",
      }
    );
    console.log("RESULT", res);

    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    console.log("DATA", data);
  } catch (err) {
    console.log(err.message);
  }
};

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log("REDUCER", action);
      state.isAuthenticated = true;
      sendHttp(action.payload);
    },
    registerNewUser(state, action) {
      console.log("New user registration!");
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
