import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import routes from "./src/routes";

const app = Express();

app.use((req, res) => {
  match(
    { location: req.url, routes },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        res.status(200).send(renderToString(<RouterContext {...renderProps}/>));
      } else {
        res.status(404).send("Not found");
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
