import React from "react";
import { render } from "react-dom";
import { browserHistory, match, Router } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import createStore from "./redux/createStore";
import routes from "./routes";

const root = document.getElementById("content");
const store = createStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  root
);
