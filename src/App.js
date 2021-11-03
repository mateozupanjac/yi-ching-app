import { Switch, Route } from "react-router-dom";

import Layout from "./components/UI/Layout";
import UserLoginPage from "./pages/UserLogin";
import InstructionsPage from "./pages/Instructions";
import YiChingPage from "./pages/YiChingPage";
import UserSavedQuestionsPage from "./pages/UserSavedQuestions";
import UserSettings from "./pages/UserSettings";
import UserProfile from "./pages/UserProfile";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown);

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <UserLoginPage />
        </Route>
        <Route path="/instructions">
          <InstructionsPage />
        </Route>
        <Route path="/yi-ching">
          <YiChingPage />
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
      </Switch>
    </Layout>
  );
}

export default App;
