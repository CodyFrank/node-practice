//  node does note use browser so node does not create a window opject.
//  instead node wraps all files (refered to as modules) in a function.
// (function (exports, require, module, __filename, __dirname){
// module code lives here
// })


// imports say name function. require is given to us via node wrapper
const sayName = require('./sayName')

// because it is exported in sayName module and imported in this module I can run code from a different module.
// sayName()

// when exporting many functions from one module. it will get imported as a object
//  the above code would look like 
sayName.sayName()

// and we now have access too
sayName.sayAddress()

// can view dir name and file name with following lines
console.log(__filename)
console.log(__dirname)

// or more visable concatination
console.log(`file name ${__filename}`)
console.log(`directory name ${__dirname}`)
