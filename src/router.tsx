import { Route } from "react-router-dom";
import Login from "./screen/Login";

const routes = [
  {
    path: "/login",
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
];

export default routes;
