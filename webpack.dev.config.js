const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");

const devConfig = Object.assign({}, baseConfig);

devConfig.entry.unshift("webpack-hot-middleware/client");

devConfig.module.loaders[0].loaders.unshift("react-hot");

devConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

module.exports = devConfig;
