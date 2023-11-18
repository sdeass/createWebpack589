const path = require("path");
const ELhtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [new ELhtmlWebpackPlugin({ template: "./public/index.html" })],
  mode: "production",
};
