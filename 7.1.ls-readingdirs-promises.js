const fs = require('node:fs/promises')

// Same with promises
fs.readdir('.').then(files => {
  files.forEach((f) => {
    console.log(f)
  })
}).catch(err => {
  console.error('Error reading directory', err)
})
