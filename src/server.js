import path from "path";
import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { createMemoryHistory, match, RouterContext } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import createHtml from "./createHtml";
import routes from "./routes";
import createStore from "./redux/createStore";

const app = Express();

app.use(Express.static(path.join(__dirname, "..", "public")));

app.use("*", (req, res) => {
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match(
    { location: req.originalUrl, history, routes },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const component = (
          <Provider store={store}><RouterContext {...renderProps}/></Provider>
        );
        const html = createHtml(renderToString(component));
        res.status(200).send(html);
      } else {
        res.status(404).send("Not found");
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
