const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /*
   * Top level of dependency graph
   * Required modules will be parsed recursively
   * Unreferenced files are be ignored by webpack
   * */
  entry: "./src/index.js",

  /**
   * Specify directory & name for webpack generated bundles
   */
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  /**
   * Rules describe actions for specific files
   * e.g. Pass all JavaScript files through babel before proceeding
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devtool: "inline-source-map",
  /**
   * Extend webpack core
   * HtmlWebpackPlugin
   * Generates html file with bundles linked between head tags using passed in configuration
   */
  plugins: [new HtmlWebpackPlugin()]
};
