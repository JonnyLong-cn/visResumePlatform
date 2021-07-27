const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: {
    // 对应渲染进程的app.tsx入口文件
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    host: '127.0.0.1',
    port: 7001,
    hot: true,
  },
  plugins: [
    // 在dist目录下生成index.html文件
    new HtmlWebpackPlugin({
      // 模版文件
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      // 通过模版文件生成的index.html文件
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  }
};

module.exports = webpackMerge.merge(baseConfig, devConfig);