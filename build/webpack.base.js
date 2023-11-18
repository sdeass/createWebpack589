const wp = require("webpack");
const ELhtmlWebpackPlugin = require("html-webpack-plugin");

const { resolve } = require("./utils");

module.exports = {
  devtool: "none",
  entry: {
    app: ["@babel/polyfill", "./src/index.js", "./public/index.html"],
  },
  output: {
    path: resolve("dist"),
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[name].[contenthash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        include: resolve("src"),
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [new ELhtmlWebpackPlugin({ template: "./public/index.html" })],
};
