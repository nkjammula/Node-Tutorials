const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
// ES6 template string
console.log(`Total Memory ${totalMemory}`);
console.log(`free memory is ${freeMemory}`);
