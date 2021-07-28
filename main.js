const { app, BrowserWindow } = require('electron')
const path = require('path')
require('dotenv').config()

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    // Remove top bar and menu
    frame: false
  })

  win.loadFile('src/index.html')
  // Run the app in full screen mode on start
  win.setFullScreen(true)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})