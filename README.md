# 环境搭建完成
所用的依赖如下：
```json
{
  "devDependencies": {
    "@babel/cli": "^7.14.8",
    "@babel/core": "^7.14.8",
    "@babel/plugin-transform-modules-commonjs": "^7.14.5",
    "@babel/plugin-transform-runtime": "^7.14.5",
    "@babel/preset-env": "^7.14.8",
    "@babel/preset-react": "^7.14.5",
    "@babel/preset-typescript": "^7.14.5",
    "@types/react": "^17.0.15",
    "@types/react-dom": "^17.0.9",
    "@types/react-redux": "^7.1.18",
    "@types/react-router-dom": "^5.1.8",
    "@types/styled-components": "^5.1.11",
    "@typescript-eslint/eslint-plugin": "^4.28.5",
    "@typescript-eslint/parser": "^4.28.5",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^4.0.0-alpha.0",
    "electron": "^13.1.7",
    "eslint": "^7.31.0",
    "eslint-config-alloy": "^4.2.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-react": "^7.24.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^4.3.0",
    "prettier": "^2.3.2",
    "typescript": "^4.3.5",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.2",
    "webpack-merge": "^5.8.0"
  },
  "dependencies": {
    "@babel/polyfill": "^7.12.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "styled-components": "^5.3.0"
  }
}
```
+ dependencies 是产生环境下的依赖，比如说 Vue、React 等
+ devDependencies 是开发环境下的依赖，比如 Webpack、ESLint、Babel 等