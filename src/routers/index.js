import { lazy } from "react";
import HomeTeplate from "../template/HomeTemplate";

const routeHome = [
  {
    Component: lazy(() => import("../pages/Home")),
    exact: true,
    path: "/",
  },
  {
    Component: lazy(() => import("../pages/Home")),
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
