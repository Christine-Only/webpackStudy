const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                // 必须要配置 useBuiltIns，如果不配置，babel 将不会处理 Promise、Map、Set、Symbol 等全局对象；
                // corejs 也要同时配置，2 的版本可以处理全局对象，但实例方法并不处理，所以这里用 3 的版本。
                useBuiltIns: "usage", //按需引入 corejs 中的模块
                corejs: 3, //core版本
                targets: '> 0.2%, not dead' //浏览器支持范围
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  mode: 'production', //mode设置production 开启了js压缩
}