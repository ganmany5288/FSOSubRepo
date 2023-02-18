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


// HTTP GET request event handler
// (request) parameter contains information on the HTTP request (in this case GET request)
// (response) parameter contains information on how the request is responded to
// Event handler that handles HTTP GET request made to the root (/) place in the application
// Only gets called when it's been routed to (i.e. when address is at localhost:3001/)
app.get('/' , (request, response) => {
    response.send('<h1>Hello World</h1>')
})


// HTTP GET request, made to /api/notes address
app.get('/api/notes', (request, response) => {
    response.json(notes)
})


app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id) // Make sure to use the correct typing here. i.e. string != int
    const note = notes.find(note => note.id === id)

    // Checks if the specific note exist for the given ID and give the appropriate response
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

// Binds http server to the app variable
// Listens to the request on PORT 3001 (if unused/available)
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)



// With express installed, the following is not required
// The JSON.stringify part, its basically built into express
// response.end(JSON.stringify(notes))


// JSON is a string and NOT a javascript object