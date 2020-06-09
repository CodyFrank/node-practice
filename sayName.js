
// defines function in this file
const sayName = () => console.log("Hello Cody")

const sayAddress = () => console.log("address")

// exports the above funtion. module.exporst given to us via the node wrapper
// below line works when exporting one function
// module.exports = sayName


// the lines below are used when many funtions need to be exported
// when imported (in this case in app.js) becomes an object { sayName: [function: sayName], sayAddress: [function: sayAddress] }
module.exports.sayName = sayName

module.exports.sayAddress = sayAddress