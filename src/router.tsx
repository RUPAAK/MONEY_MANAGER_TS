import { Route } from "react-router-dom";
import Login from "./screen/Login";
import { PartialRouteObject } from "react-router";
import Register from "./screen/Register";
import Home from "./screen/Home";

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
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
