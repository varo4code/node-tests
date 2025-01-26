const fs = require('node:fs')

const stat = fs.statSync('./file1.txt')

// File Data
console.log('IsArchive', stat.isFile())
console.log('IsDirectory', stat.isDirectory())
console.log('Tamaño en bytes', stat.size)
