const mongoose = require('mongoose')

if (process.argv.length < 5){
    console.log('please type in everything')
    process.exit(1)
}

const password = process.argv[2]

const name = process.argv[3]

const phone = process.argv[4]

const url = `mongodb+srv://FSOtest:${password}@fullstackopencluster.phlc1en.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

// Connects to mongoDB
mongoose.connect(url)


const phoneBookSchema = new mongoose.Schema({
    name: String,
    phone_number: String,
})


const PhoneBook = mongoose.model('phoneBookSchema', phoneBookSchema)

PhoneBook.find({}).then(result => {
    result.forEach(entry => {
        console.log(entry.name, entry.phone_number)
    })
    mongoose.connection.close()
})

const phoneBook = new PhoneBook({
    name: name,
    phone_number: phone,
})

phoneBook.save().then(result => {
    console.log('phonebook entry saved!!')
    mongoose.connection.close()
})
