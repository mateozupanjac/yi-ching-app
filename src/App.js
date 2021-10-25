import { Switch, Route } from "react-router-dom";

import UserLoginPage from "./pages/UserLogin";
import InstructionsPage from "./pages/Instructions";
import YiChingPage from "./pages/YiChingPage";
import UserSavedQuestionsPage from "./pages/UserSavedQuestions";
import UserSettings from "./pages/UserSettings";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
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
  );
}

export default App;
