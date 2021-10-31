import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ exact, path, component, isAuth }) => {
  return !isAuth ? (
    <Redirect to='/signin' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;
