
import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./file1.txt', 'utf-8'),
  readFile('./file2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Text 1: ', text);
  console.log('Text 2: ', secondText);
})