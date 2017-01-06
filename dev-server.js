require("./babel.server");

const path = require("path");
const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const webpackDevConfig = require("./webpack.dev.config");
const createHtml = require("./src/create-html").default;

const app = express();
const compiler = webpack(webpackDevConfig);

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.get("*", (req, res) => {
  res.send(createHtml());
});

app.set("port", 8080);

app.listen(app.get("port"), (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on port ${app.get("port")}...`);
});
