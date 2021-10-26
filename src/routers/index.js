import { lazy } from "react";
import AdminTemplate from "template/AdminTemplate";
import TicketTemplate from "template/TicketTemplate";
import UserTemplate from "template/UserTemplate";
import HomeTemplate from "../template/HomeTemplate";

const routeHome = [
  {
    Component: lazy(() => import("../pages/Home/Home")),
    exact: true,
    path: "/",
  },
  {
    Component: lazy(() => import("../pages/Home/Home")),
    exact: false,
    path: "/home",
  },
  {
    Component: lazy(() => import("../pages/Home/Profile")),
    exact: false,
    path: "/profile",
  },
  {
    Component: lazy(() => import("../pages/Home/Detail")),
    exact: false,
    path: "/detail/:id",
  },
];

const routeAdmin = [
  {
    Component: lazy(() => import("../pages/Admin/UserManagement")),
    exact: true,
    path: "/admin",
  },

  {
    Component: lazy(() => import("../pages/Admin/UserManagement")),
    exact: false,
    path: "/admin/user-management",
  },
  {
    Component: lazy(() => import("../pages/Admin/AddUser")),
    exact: false,
    path: "/admin/add-user",
  },
  {
    Component: lazy(() => import("../pages/Admin/EditUser")),
    exact: false,
    path: "/admin/edit-user/:id",
  },
  {
    Component: lazy(() => import("../pages/Admin/FilmManagement")),
    exact: false,
    path: "/admin/film-management",
  },
  {
    Component: lazy(() => import("../pages/Admin/EditFilm")),
    exact: false,
    path: "/admin/edit-film/:id",
  },
  {
    Component: lazy(() => import("../pages/Admin/AddFilm")),
    exact: false,
    path: "/admin/add-film",
  },
  {
    Component: lazy(() => import("../pages/Admin/CreateShowtimes")),
    exact: false,
    path: "/admin/create-showtimes/:id/",
  },
];

const routeTicketRoom = [
  {
    Component: lazy(() => import("../pages/TicketRoom")),
    exact: false,
    path: "/ticketroom/:id",
  },
];

const routeUser = [
  {
    Component: lazy(() => import("../pages/User/Login")),
    exact: false,
    path: "/login",
  },
  {
    Component: lazy(() => import("../pages/User/Register")),
    exact: false,
    path: "/register",
  },
];

export const renderRouteHome = () => {
  return routeHome.map((route, key) => {
    return (
      <HomeTemplate
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

export const renderRouteTicketRoom = () => {
  return routeTicketRoom.map((route, key) => {
    return (
      <TicketTemplate
        key={key}
        exact={route.exact}
        Component={route.Component}
        path={route.path}
      />
    );
  });
};

export const renderRouteUser = () => {
  return routeUser.map((route, key) => {
    return (
      <UserTemplate
        key={key}
        exact={route.exact}
        Component={route.Component}
        path={route.path}
      />
    );
  });
};
