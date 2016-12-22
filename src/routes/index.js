import React from "react";
import { Route } from "react-router";
import { About, Root, Todos } from "../pages";

const routes = (
  <Route path="/" component={Root}>
    <Route path="about" component={About}/>
    <Route path="todos" component={Todos}/>
  </Route>
);

export default routes;
