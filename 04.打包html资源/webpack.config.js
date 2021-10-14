const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// loader 下载 使用
// plugins 下载 引入 使用

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（js/css）
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
