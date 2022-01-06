import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useEffect, useCallback } from "react";

import Layout from "./UI/Layout";
import UserLoginPage from "./pages/UserLogin";
import InstructionsPage from "./pages/Instructions";
import YiChingPage from "./pages/YiChingPage";
import UserSavedQuestionsPage from "./pages/UserSavedQuestions";
import UserSettings from "./pages/UserSettings";
import UserProfile from "./pages/UserProfile";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faYinYang,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";

library.add(faCaretDown, faYinYang, faUser);

function App() {
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const initialToken = JSON.parse(localStorage.getItem("user"));
  console.log(initialToken);

  useEffect(() => {
    if (isAuth) {
      history.replace("/yi-ching");
    } else {
      history.replace("/login");
    }
  }, [isAuth, history]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isAuth ? <YiChingPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <UserLoginPage />
        </Route>
        <Route path="/instructions">
          <InstructionsPage />
        </Route>
        <Route path="/yi-ching">
          {isAuth ? <YiChingPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="user-saved-questions">
          <UserSavedQuestionsPage />
        </Route>
        <Route path="user-settings">
          <UserSettings />
        </Route>
        <Route path="user-profile">
          <UserProfile />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
