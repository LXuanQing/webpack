const path = require('path');
const webpack = require('webpack');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');
//用于插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: path.join(__dirname, 'index.js'),
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[chunkhash:4].js'
    },
    module: {
        loaders: [
                { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
            ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // 匹配删除的文件 不然每次打包之前的js文件还在
        //持久化moduleId，主要是为了之后研究加载代码好看一点。
        new webpack.HashedModuleIdsPlugin(), // moduleId  每个文件固定
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
          }),
        new webpack.optimize.CommonsChunkPlugin({ // 公共代码专门抽取到manifest.js
            name: 'manifest',
        })
    ]
};
// 只安装 babel-loader会报 找不到babel-core，还得安装babel-core
// 新建.babelrc文件，安装babel-preset-es2015，可把es6转化成es5