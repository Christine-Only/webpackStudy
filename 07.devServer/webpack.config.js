const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: [
    "./src/js/index.js",
    // "./webpack/entry.js"
  ],
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        exclude: /\.(html|css|js)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          esModule: false,
          outputPath: 'media'
        },
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new webpack.HotModuleReplacementPlugin()
  ],
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  mode: "development",
  devServer: {
    static: {
      directory: resolve(__dirname, "build"),
    },
    port: 3000,
    open: true,
    hot: true,
    // 开启gzip压缩
    compress: true,
  },
};
