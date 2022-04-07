import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Bootstrap = () => {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
};
ReactDOM.render(<Bootstrap />, document.getElementById("app"));
