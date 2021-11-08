import { Route } from "react-router-dom";
import Login from "./screen/Login";
import { PartialRouteObject } from "react-router";
import Register from "./screen/Register";
import Home from "./screen/Home";
import { auth } from "./authencation";
import { Navigate } from "react-router-dom";

interface RouterType {
  path: string;
  children: [
    {
      path: string;
      element: JSX.Element;
    }
  ];
}

const routes: RouterType[] | PartialRouteObject[] = [
  {
    path: "/login",
    element: auth() ? <Navigate to="/" /> : <Login />,
  },
  {
    path: "/register",
    element: auth() ? <Navigate to="" /> : <Register />,
  },
  {
    path: "/dashboard",
    element: auth() ? <Home /> : <Login />,
  },
  {
    path: "/",
    element: <Home />,
    // element: auth() ? <Home /> : <Login />,
  },
];

export default routes;
