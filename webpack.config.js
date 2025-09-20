const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js", 
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv({
      path: "./.env", 
      safe: false,   
      systemvars: true, 
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
    hot: true, 
  },
  mode: "development",
};
