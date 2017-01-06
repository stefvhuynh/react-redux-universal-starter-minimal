const path = require("path");

module.exports = {
  entry: [
    "babel-polyfill",
    "./src/client"
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] }
    ]
  },
  plugins: []
};
