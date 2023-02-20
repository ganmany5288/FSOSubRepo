const express = require('express')
const app = express()

let people = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]


app.use(express.json())


// HTTP GET request
app.get('/api/people', (request, response) => {
    response.json(people)
})


app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/info', (request, response) => {
    // response.send(`<h1>This is info page!</h1>`)
    response.write(`Phonebook has information for ${people.length} people\n`)
    response.write(`${new Date()}`)
    response.end()
    // response.send('Let me know if this page lives!')
})

const PORT = 3002
app.listen(PORT)
console.log(`Server listening on ${PORT}`)