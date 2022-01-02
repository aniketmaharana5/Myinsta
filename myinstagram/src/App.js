import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
