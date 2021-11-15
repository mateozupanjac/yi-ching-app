import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";

export const useHttp = (userData) => {
  return async (dispatch) => {
    // Starts the loader
    dispatch(uiActions.startLoading());

    // Signin in or up
    const sendRequest = async () => {
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

      // Throws error if there is some
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    };

    try {
      // Login or signin up the user
      // Redirecting user to yi-ching page
      const data = await sendRequest().json();
      console.log(data);

      dispatch(uiActions.stopLoading());
      dispatch(authActions.login());
    } catch (err) {
      // catching and showing error if there is some
      // redirecting the user to the login page
      console.log(err.message);
      dispatch(uiActions.stopLoading());
    }
  };
};
