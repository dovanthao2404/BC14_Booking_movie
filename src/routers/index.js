import { lazy } from "react";
import AdminTemplate from "template/AdminTemplate";
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

const routeAdmin = [
  {
    Component: lazy(() => import("../pages/Dashboard")),
    exact: true,
    path: "/admin"
  },
  {
    Component: lazy(() => import("../pages/Dashboard")),
    exact: false,
    path: "/admin/dashboard"
  },
  {
    Component: lazy(() => import("../pages/UserManagement")),
    exact: false,
    path: "/admin/user-management"
  },
  {
    Component: lazy(() => import("../pages/AddUser")),
    exact: false,
    path: "/admin/add-user"
  }
];

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

export const renderRouteAdmin = () => {
  return routeAdmin.map((route, key) => {
    return (
      <AdminTemplate
        key={key}
        exact={route.exact}
        Component={route.Component}
        path={route.path}
      />
    );
  });
};
