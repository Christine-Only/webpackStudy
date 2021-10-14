const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: resolve(__dirname, "./src/index.js"),
  output: {
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
        },
        type: "javascript/auto",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "development",
};
