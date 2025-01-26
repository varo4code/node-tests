import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
// import { os } from "node:os";

// ESModules
// Operating System Info
console.log('System', platform())
console.log('Release', release())
console.log('Architecture', arch())
// Useful for scaling process in node
console.log('CPUs :' + cpus().length, cpus())
console.log('Free memory', freemem() / 1024 / 1024, 'Mb')
console.log('Total memory', totalmem() / 1024 / 1024, 'Mb')
console.log('Uptime', uptime() / 60 / 60, 'h')
