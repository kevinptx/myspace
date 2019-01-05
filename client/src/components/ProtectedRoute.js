import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../providers/AuthProvider";

//this is where a functional component accepts props.
const ProtectedRoute = ({ component: AppComponent, ...rest }) => (
  <AuthConsumer>
    {auth => (
      <Route
        {...rest}
        render={props =>
          auth.authenticated ? (
            <AppComponent {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                // from is a feature of React Router.
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
