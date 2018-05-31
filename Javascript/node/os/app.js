
/* Path */

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);



// Working with Os 

// const os = require('os');

// var TotalMemory = os.totalmem();
// var FreeMemory = os.freemem();
// var UpTime = os.uptime();


// console.log(`Total uptime: ${UpTime}  The Total Memory is: ${TotalMemory}  The Free Memory is: ${FreeMemory}` );


// Working with files 

const fs = require ('fs');

const files = fs.readdirSync('./');

console.log(files);