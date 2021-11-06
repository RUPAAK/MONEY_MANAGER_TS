import { Route } from "react-router-dom";
import Login from "./screen/Login";
import { PartialRouteObject } from "react-router";
import Register from "./screen/Register";

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
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    children: [
      {
        path: "/",
        element: <Register />,
      },
    ],
  },
];

export default routes;
