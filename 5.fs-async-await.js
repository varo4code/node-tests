// Only for native modules that haven't native promises
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const { readFile } = require('node:fs/promises')

async function init () {
  console.log('Reading file 1...')
  const text = await readFile('./file1.txt', 'utf-8')
  console.log('text 1:', text)
  console.log('--> Something while reading...')

  console.log('Reading file 2...')
  const secondText = await readFile('./file2.txt', 'utf-8')
  console.log('text 2:', secondText)
}

init()

// IIFE - Inmediatly Invoked Function Expression
// ;(
//   async () => {
//     console.log('Reading file 1...')
//     const text = await readFile('./file1.txt', 'utf-8')
//     console.log('text 1:', text)
//     console.log('--> Something while reading...')

//     console.log('Reading file 2...')
//     const secondText = await readFile('./file2.txt', 'utf-8')
//     console.log('text 2:', secondText)
//   }
// )()
