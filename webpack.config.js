const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js", // point d'entrée
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js", // hash pour cache-busting
    clean: true, // nettoie dist avant build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // gère le CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // gère les images
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv(), // charge ton .env
  ],
  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
  },
  mode: "development",
};
