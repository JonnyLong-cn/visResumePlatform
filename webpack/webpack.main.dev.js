const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  // 入口
  entry: path.resolve(__dirname, '../app/main/electron.js'),
  target: 'electron-main',
  // 出口
  output: {
    filename: 'electron.js',
    // 打包路径在/dist下
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
// 合并导出一份完整配置
module.exports = webpackMerge.merge(baseConfig, mainConfig);