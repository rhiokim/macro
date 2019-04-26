module.exports = win => {
  const { app, globalShortcut } = require('electron')

  function send (key) {
    win.webContents.send('keypress', key)
  }

  globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })

  globalShortcut.register('F5', () => {
    send('start')
  })

  globalShortcut.register('F6', () => {
    send('end')
  })

  app.on('will-quit', () => {
    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
  })
}
