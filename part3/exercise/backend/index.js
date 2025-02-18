// Simple Web Server + Express
// Similar to importing library
const express = require('express')
const app = express()
const http = require('http') // Node's built-in web server module

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]
//   const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(notes))
//   })

// Above HTTPS is replaced with the following Express

// Routes that defines event handler
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

// Binds the http server to app variable
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)