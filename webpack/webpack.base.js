const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // resolve 配置 Webpack 如何寻找模块所对应的文件
  resolve: {
    /* 
    表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在
    当遇到 import A from './A' 时，会先寻找 A.js、找不到就去找 A.jsx，按照规则找，最后还是找不到，就会报错。
    */
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 别名
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}