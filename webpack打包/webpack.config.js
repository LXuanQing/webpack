const path = require('path');
const webpack = require('webpack');
//用于插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].[chunkhash:4].js'
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin(['dist']), // 匹配删除的文件 不然每次打包之前的js文件还在
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    //持久化moduleId，主要是为了之后研究加载代码好看一点。
    new webpack.HashedModuleIdsPlugin(), // moduleId  每个文件固定
    new webpack.optimize.CommonsChunkPlugin({ // 公共代码专门抽取到manifest.js
      name: 'manifest',
    })
  ]
};

/** 不用 HashedModuleIdsPlugin
 *  webpackJsonp([0],[
    // 0 
    (function(module, exports, __webpack_require__) {

    var b = __webpack_require__(1)
    var a = 12

    }),

    // 1 
    (function(module, exports) {

    module.exports = {
        age: 1
    }

    })
    ],[0]);
 * 
 * 
 */
