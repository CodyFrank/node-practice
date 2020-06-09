const http = require("http")

// creates a server to handle http requests and respones

const server = http.createServer((req, res) => {
    // can get access to url in req
    if(req.url === '/'){
        res.writeHead(200, { "Content-Type": "text/html"})
        res.write('<h1>Hello World</h1>')
        res.end()
    }
    if(req.url === '/about'){
        res.write("about page")
        res.end()
    }
})

// starts listening to server can take a callback function
server.listen(3000, console.log("server is running"))