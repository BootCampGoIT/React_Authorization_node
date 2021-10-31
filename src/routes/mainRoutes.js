import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName:"HomePage" */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "great",
    path: "/great",
    exact: true,
    component: lazy(() =>
      import("../pages/GreatPage" /* webpackChunkName:"GreatPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "sign Up",
    path: "/signup",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "sign in",
    path: "/signin",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
