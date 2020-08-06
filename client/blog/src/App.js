import logo from "./img/Logo.PNG";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";
import Logout from "./Logout";
import Generator from "./Generator";
import PrivateRoute from "./PrivateRoute";

// Redux

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/generator" component={Generator} />
      </Router>
    </div>
  );
};
export default App;
