const { log } = require('node:console')
const fs = require('node:fs')

// --> SYNC
// console.log('Reading file1');
// const text = fs.readFileSync('./file1.txt', 'utf-8');

// --> ASYNC
log('Reading file1')
fs.readFile('./file1.txt', 'utf-8', (err, text) => {
  log(text)
})

log('Something while reading')

console.log('Reading file2')
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
  log(text)
})
