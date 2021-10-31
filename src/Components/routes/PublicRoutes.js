import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ exact, path, isAuth, component, isRestricted }) => {
  return isAuth && isRestricted ? (
    <Redirect to='/great'/>
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
