;(() => {
  const { globalShortcut } = require('electron')

  globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })
})()
