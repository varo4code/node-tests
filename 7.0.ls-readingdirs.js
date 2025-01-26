const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory', err)
    return
  }

  files.forEach((f) => {
    console.log(f)
  })
})
