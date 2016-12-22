import React from "react";
import { Route } from "react-router";
import { AboutPage, RootPage, TodosPage } from "../pages";

const routes = (
  <Route path="/" component={RootPage}>
    <Route path="about" component={AboutPage}/>
    <Route path="todos" component={TodosPage}/>
  </Route>
);

export default routes;
