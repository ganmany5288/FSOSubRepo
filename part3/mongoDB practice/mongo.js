const mongoose = require('mongoose')

if (process.argv.length < 3){
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://FSOtest:${password}@fullstackopencluster.phlc1en.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)


// Constructor
const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})



const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})


// Below code generates new notes and saves it...
// It does save properly??
const note = new Note({
    content:'This is an unimportant note...',
    important: false,
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})