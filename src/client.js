import React from "react";
import { render } from "react-dom";
import { browserHistory, match, Router } from "react-router";
import routes from "./routes";

const root = document.getElementById("content");

match(
  { history: browserHistory, routes },
  (error, redirectLocation, renderProps) => {
    render(<Router {...renderProps}/>, root);
  }
);
