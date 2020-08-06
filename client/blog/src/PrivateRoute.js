import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return (
            <div>
              <Component {...props} />
              <Link className="Logout" to="/logout">
                {" "}
                Logout{" "}
              </Link>
            </div>
          );
        } else {
          return (
            <div>
              <Redirect to="/login" />
            </div>
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
