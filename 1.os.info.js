const os = require('node:os')

// CommonJS
// Operating System Info
console.log('System', os.platform())
console.log('Release', os.release())
console.log('Architecture', os.arch())
// Useful for scaling process in node
console.log('CPUs :' + os.cpus().length, os.cpus())
console.log('Free memory', os.freemem() / 1024 / 1024, 'Mb')
console.log('Total memory', os.totalmem() / 1024 / 1024, 'Mb')
console.log('Uptime', os.uptime() / 60 / 60, 'h')
