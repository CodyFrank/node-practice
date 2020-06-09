// fs is to work with file system

const fs = require('fs')

// writeFile will create and writes data to a file ex below funtion creates a file message.txt 
// writes the string hello there node and performs a callback function with the error parameter
// writeFile IS ASYNCRONUS!!!!!! it takes time to write to a file
fs.writeFile("message.txt", "hello there node", (err) => {
  if(err){
      throw err
  }

  console.log("file has been written")
})

// fs.writeFile("message.txt", "More Words to write", (err) => {
//   if(err) throw err
//   console.log("file has been written again!")
// })


// reads file. first argument is file to read, second is encoding utf8 and third is callback function
fs.readFile("message.txt", "utf8", (err, data) => {
  if(err) throw err
  console.log(data)
})