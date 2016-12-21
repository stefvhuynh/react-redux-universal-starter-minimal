import React from "react";
import { Route } from "react-router";

const Root = ({ children }) => {
  return (
    <div>
      <h1>hello from react</h1>
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div>about</div>
  );
};

const Info = () => {
  return (
    <div>info</div>
  );
};

const routes = (
  <Route path="/" component={Root}>
    <Route path="about" component={About}/>
    <Route path="info" component={Info}/>
  </Route>
);

export default routes;
