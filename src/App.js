import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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

library.add(faCaretDown, faYinYang, faUser);

function App() {
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  // Redirects user upon log in
  useEffect(() => {
    if (isAuth && token) {
      history.replace("/yi-ching");
    }
  }, [isAuth, token, history]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isAuth ? <Redirect to="/yi-ching" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {!isAuth ? <UserLoginPage /> : <Redirect to="/yi-ching" />}
        </Route>
        <Route path="/instructions">{isAuth && <InstructionsPage />}</Route>
        <Route path="/yi-ching">
          {isAuth ? <YiChingPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="user-saved-questions">
          {isAuth && <UserSavedQuestionsPage />}
        </Route>
        <Route path="user-settings">{isAuth && <UserSettings />}</Route>
        <Route path="user-profile">{isAuth && <UserProfile />}</Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
