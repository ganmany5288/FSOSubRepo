// Node's built-in HTTP module, primary goal is for the server creation
const express = require('express')
const app = express()

// Hardcoded JSON data
let notes = [
    {
        id: 1, 
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can only execute Javascript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]

app.get('/' , (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

// Binds http server to the app variable
// Listens to the request on PORT 3001 (if unused/available)
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)