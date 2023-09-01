const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')

require('dotenv').config()
const PhoneBook = require('./model/note')

app.use(cors())
app.use(express.static('build'))


// How express.js uses these middleware function to handling request/response objects
app.use(express.json())
app.use(requestLogger)
app.use(morgan(function (tokens, req, res) {
  const bod = JSON.stringify(req.body)
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    bod
  ].join(' ')
}
))




// HTTP GET request using MongoDB backend
app.get('/api/people', (request, response) => {
  PhoneBook.find({}).then(people => {
    response.json(people.map(people2 => people2.toJSON()))
  })
})


app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/info', (request, response) => {
  // response.send(`<h1>This is info page!</h1>`)
  response.write(`Phonebook has information for ${people.length} people\n`)  // This step is completed but how do I use an h1 tag here (the HTML tags)
  response.write(`${new Date()}`)
  response.end()
  // response.send('Let me know if this page lives!')
})


app.get('/api/people/:id', (request, response, next) => {
  PhoneBook.findById(request.params.id)
    .then(entry => {
      if(entry){
        response.json(entry)
      }else{
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

function requestLogger (request, response, next) {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('------')
  next()
}

// app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if(error.name === 'CastError'){
    return response.status(400).send({
      error: 'malformatted id'
    })
  }
  next(error)
}



// HTTP DELETE request
app.delete('/api/people/:id', (request, response, next) => {
  PhoneBook.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/people/:id', (request, response, next) => {
  const body = request.body
  const phonebook = {
    name: body.name,
    phoneNumber: body.phoneNumber
  }
  PhoneBook.findByIdAndUpdate(request.params.id, phonebook, { new: true })
    .then(updatedPhone => {
      response.json(updatedPhone)
    })
    .catch(error => next(error))
})


app.post('/api/people', (request, response) => {
  const body = request.body

  const keys = Object.keys(body)
  const validKeys = ['name', 'phoneNumber']
  const hasOnlyValidKeys = keys.length === validKeys.length && keys.every(key => validKeys.includes(key))


  if(!hasOnlyValidKeys){
    return response.status(400).json({
      error:'missing parameters, please try again!'
    })
  }else if(!body.name || !body.phoneNumber) {
    return response.status(400).json({
      error: 'missing content'
    })
  }
  const people = new PhoneBook({
    name: body.name,
    phoneNumber: body.phoneNumber
  })
  console.log(people)

  people.save().then(savedPeople => {
    response.json(savedPeople)
  })
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = 3002
app.listen(PORT)
console.log(`Server listening on ${PORT}`)