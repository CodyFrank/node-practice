const url = require('url')

const address = "https://www.youtube.com/watch?v=zQRrXTSkvfw&t=933s"

// creates a object from the url with accesable values to work with url
const parsedUrl = url.parse(address, true)

console.log(parsedUrl)

