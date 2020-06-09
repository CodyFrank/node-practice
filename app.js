//  node does note use browser so node does not create a window opject.
//  instead node wraps all files (refered to as modules) in a function.
// (function (exports, require, module, __filename, __dirname){
// module code lives here
// })


// imports say name function. require is given to us via node wrapper
const sayName = require('./sayName')

// because it is exported in sayName module and imported in this module I can run code from a different module.
console.log(sayName)

