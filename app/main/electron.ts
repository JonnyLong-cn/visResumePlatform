/**
 * @desc electron 主入口
 */
const path = require('path');
const { app, BrowserWindow } = require('electron');

function isDev() {
  let flag = process.env.NODE_ENV === 'development';
  return flag;
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // 相关模块，一个也不能少
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  if (isDev()) {
    // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    mainWindow.loadURL('http://127.0.0.1:7001');
  } else {
    // 在主入口处导入index.html
    console.log("路径为：" + __dirname);
    mainWindow.loadFile(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});