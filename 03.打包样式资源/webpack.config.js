const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    //   __dirname 是nodejs的变量， 代表当前文件的目录绝对路径
    path: resolve(__dirname, "build"),
  },
  //   loader配置
  module: {
    rules: [
      //   详细loader
      {
        //   匹配哪些文件
        test: /\.css$/,
        //   使用哪些loader处理
        use: [
          // use数组中loader执行顺序： 从右往右，从下往上 依次执行
          // 创建style标签，将js中的样式资源插入进去，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 将less文件编译成css文件
          // 需要下载less和less-loader
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    //   插件配置
  ],
  mode: "development",
  //   mode: "production",
};
