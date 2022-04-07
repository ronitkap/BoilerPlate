import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Products";

const Bootstrap = () => {
  return (
    <BrowserRouter>
      <h1>HOST APP</h1>
      <Products />
    </BrowserRouter>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Bootstrap />
  </React.StrictMode>,
  document.getElementById("app")
);
