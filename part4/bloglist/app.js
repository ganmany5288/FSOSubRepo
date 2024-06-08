// const config = require('./utils/config')
const express = require('express')
require('express-async-errors')

const morgan = require('morgan')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)



const url = config.MONGODB_URI
logger.info('connecting to: ', url)
app.use(cors())
app.use(express.json())

mongoose.connect(url)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.info('error connecting to MongoDB: ', error.message)
    })


app.get('/api/blogs', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

app.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)
    blog 
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

// Remember what the following does:
// app.user(...)
// SOMETHING REGARDING NODEJS



module.exports = app