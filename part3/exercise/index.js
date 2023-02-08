// Node's built-in HTTP module, primary goal is for the server creation
import http from 'http'
const http = require('http')

// createServer is a method used to create a new web server (from http module)
// event handler is registered to the server
const app = http.createServer((request, response) => {
   //  Request response (200) with content-type: text/plain
   response.writeHead(200, { 'Content-Type': 'text/plain' })
   // Content of the site
   response.end('Hello World')
})


// Binds http server to the app variable
// Listens to the request on PORT 3001 (if unused/available)
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)