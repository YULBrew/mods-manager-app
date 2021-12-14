// import { fs } from 'fs'
// import { path } from 'path'
import { app, ipcMain } from 'electron'
const fs = require('fs')
const os = require('os')
// const path = require('path')
// const { ipcMain } = require('electron')

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Load here all startup windows
require('./mainWindow')

// Events
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  // Import the filesystem module
  const addonPath = os.homedir() + '\\Documents\\Elder Scrolls Online\\live\\AddOns'
  // Function to get current filenames
  // in directory with specific extension
  fs.readdir(addonPath, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      files.forEach(file => {
        //       if (path.extname(file) == '.txt') {
        console.log(file)
        //       }
      })
    }
  })
  event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})
