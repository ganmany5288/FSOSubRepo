const mongoose = require('mongoose')
const url = process.env.MONGODB_URL
console.log('connecting to: ', url)

mongoose.set('strictQuery', false)
mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('Error when connecting to MongoDB: ', error.message)
    })

const phoneBookSchema = new mongoose.Schema(
    {
        name: String,
        phone_number: Boolean,
    },
    {
        collection: 'phonebookschemas'
    }
)

phoneBookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('PhoneBook', phoneBookSchema)