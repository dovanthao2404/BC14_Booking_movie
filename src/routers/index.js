import { lazy } from "react";
import HomeTeplate from "../containers/HomeTemplate";

const routeHome = [
  {
    Component: lazy(() => import("../containers/HomeTemplate/HomePage")),
    exact: true,
    path: "/",
  },
  {
    Component: lazy(() => import("../containers/HomeTemplate/HomePage")),
    exact: false,
    path: "/home",
  },
];

const routeAdmin = [];

export const renderRouteHome = () => {
  return routeHome.map((route, key) => {
    return (
      <HomeTeplate
        key={key}
        exact={route.exact}
        Component={route.Component}
        path={route.path}
      />
    );
  });
};
