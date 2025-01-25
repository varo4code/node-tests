const { log } = require('node:console');
const fs = require('node:fs');
const fspromis = require('node:fs/promises');
const { promisify } = require('node:util');

// --> ASYNC
log('Reading file1')
fspromis.readFile('./file1.txt', 'utf-8').then(text => { log(text) });

log('Something while reading');

console.log('Reading file2')
fspromis.readFile('./file2.txt', 'utf-8').then(text => { log(text) });


// Creating promises from native modules 
const readFilePromise = promisify(fs.readFile);
readFilePromise('./file1.txt', 'utf-8').then(text => { log(text) });