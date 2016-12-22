var path = require("path");

module.exports = {
  entry: [
    "babel-polyfill",
    "./src/client"
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};
