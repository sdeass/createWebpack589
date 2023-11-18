const wp = require("webpack");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");

const config = merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/sheck/": {
        target: "http://127.0.0.1:5000",
      },
    },
  },
  plugins: [new wp.HotModuleReplacementPlugin()],
});

module.exports = config;
