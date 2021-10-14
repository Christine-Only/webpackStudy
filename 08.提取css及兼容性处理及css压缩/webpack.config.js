const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

process.env.NODE_ENV === 'development'
// process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          // 提取js中的css成单独文件
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // package.json文件的browserslist
                  'postcss-preset-env'
                ]
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // css提取
    new MiniCssExtractPlugin({ filename: 'css/[name].css' })
  ],
  optimization: {
    // 开发环境开启css压缩
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ],
  },
  // mode: 'production',
  mode: 'development'
}