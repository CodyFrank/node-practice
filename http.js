const http = require("http")
const path = require('path')
const fs = require('fs')

// creates a server to handle http requests and respones

// const server = http.createServer((req, res) => {
//     // can get access to url in req
//     if(req.url === '/'){
//         res.writeHead(200, { "Content-Type": "text/html"})
//         res.write('<h1>Hello World</h1>')
//         res.end()
//     }
//     if(req.url === '/about'){
//         res.write("about page")
//         res.end()
//     }
// })

// // starts listening to server can take a callback function
// server.listen(3000, console.log("server is running"))


// can simplify above code and import fs and path modules to use a html file and write that to the server.

const server = http.createServer((req, res) => {
    if(req.url === '/'){

        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if(err) throw err
            res.writeHead(200, { "Content-Type": "text/html"})
            res.write(data)
            res.end()
        })

    }
})

server.listen(3000, console.log("server is running"))