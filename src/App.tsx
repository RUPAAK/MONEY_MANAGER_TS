import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = (): JSX.Element => {
  const content = useRoutes(routes);
  return <div className="App">{content}</div>;
};

export default App;
