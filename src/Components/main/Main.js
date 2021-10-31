import React, { Suspense } from "react";
import LoaderComponent from "../loader/LoaderComponent";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../routes/PrivateRoutes";
import PublicRoute from "../routes/PublicRoutes";

const Main = () => {
  const isAuth = false;
  return (
    <main>
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...route} key={route.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
