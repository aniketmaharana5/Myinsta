import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
    </Switch>
  );
}

export default App;
