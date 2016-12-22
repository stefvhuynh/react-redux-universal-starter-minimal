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
import { addTodo } from "./redux/modules/todos";

const app = Express();

app.use(Express.static(path.join(__dirname, "..", "public")));

app.use("*", (req, res) => {
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  // Use a real fetch get necessary data here.
  const fakeFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve("todo from server");
    }, 1000)
  });

  fakeFetch.then((todo) => {
    // Add the todo to the store and then match the requested route.
    store.dispatch(addTodo(todo));
    match(
      { location: req.originalUrl, history, routes },
      (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(
            302,
            redirectLocation.pathname + redirectLocation.search
          );
        } else if (renderProps) {
          const component = (
            <Provider store={store}>
              <RouterContext {...renderProps}/>
            </Provider>
          );
          const html = createHtml(renderToString(component), store.getState());
          res.status(200).send(html);
        } else {
          res.status(404).send("Not found");
        }
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
