// import { fs } from 'fs'
// import { path } from 'path'
import { app, ipcMain, Menu } from 'electron'

const fs = require('fs')
const os = require('os')
// const path = require('path')
const log = require('electron-log')
const { autoUpdater } = require('electron-updater')

// Logging
autoUpdater.logger = log
autoUpdater.logger.transports.file.level = 'debug'
log.info('App starting...')

// Define the menu
const template = []
if (process.platform === 'darwin') {
  // OS X
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        label: 'About ' + name,
        role: 'about'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click () { app.quit() }
      }
    ]
  })
}
// Open a window that displays the version
//
// THIS SECTION IS NOT REQUIRED
//
// This isn't required for auto-updates to work, but it's easier
// for the app to show a window than to have to click "About" to see
// that updates are working.
// -------------------------------------------------------------------

// app.on('ready', function () {
//   // Create the Menu
//   const menu = Menu.buildFromTemplate(template)
//   Menu.setApplicationMenu(menu)
// })

// This will immediately download an update, then install when the app quits.
app.on('ready', function () {
  console.log('Current Version: ' + autoUpdater.currentVersion)
  autoUpdater.checkForUpdatesAndNotify()
})

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

ipcMain.handle('updater:get.current.version', async () => {
  return autoUpdater.currentVersion
})
