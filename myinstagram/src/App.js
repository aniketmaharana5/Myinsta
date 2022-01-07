import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import UpdateProfile from "./components/UpdateProfile";
import Home from "./components/Home";
import Profile from "./components/Profile";
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
          <Route exact path="/home">
          <Home/>
          </Route>
          <Route exact path="/profile">
          <Profile/>
          </Route>
          <Route exact path="/updateProfile">
          <UpdateProfile/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
