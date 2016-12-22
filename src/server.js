import path from "path";
import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import createHtml from "./createHtml";
import routes from "./routes";

const app = Express();

app.use(Express.static(path.join(__dirname, "..", "public")));

app.use("*", (req, res) => {
  match(
    { location: req.originalUrl, routes },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const html = createHtml(
          renderToString(<RouterContext {...renderProps}/>)
        );
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
