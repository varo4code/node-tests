// .js --> By default CommonJs
// .msj --> ES Modules
// .cjs --> CommonJs

import { sum } from "./sum.mjs";

// Basic import / export with node.  Made with ES Modules
console.log(sum(7, 3));