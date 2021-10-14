/*
    index.js: webpack 入口起点文件

    1. 运行指令：
    开发环境：webpack ./src/index.js -o ./build --mode=development
        webpack以 ./src/index.js文件开始打包，打包输出到 ./build，整体打包环境是开发环境
    生产环境：webpack ./src/index.js -o ./build --mode=production
        webpack以 ./src/index.js文件开始打包，打包输出到 ./build，整体打包环境是生产环境

    2. 结论
        2.1 webpack能处理js/json资源，不能处理css/img等其他资源
        2.2 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
 */

import data from "./data.json";
import "./index.css";
console.log("data: ", data);

function add(x, y) {
  return x + y;
}

console.log(add(2, 3));
