const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  // 入口
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.jsx'),
  },
  // 出口
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  // 针对electron渲染进程
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  // 配置本地开发devServer
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true,
  },
  // 通过HtmlWebpackPlugin自动生成一份以/app/renderer/index.html为模版的HTML文件
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
};
// 合并导出一份完整配置
module.exports = webpackMerge.merge(baseConfig, devConfig);