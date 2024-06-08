require('dotenv').config()

let PORT = process.env.PORT
// console.log("PORT Number: ", PORT)
let MONGODB_URI = process.env.MONGO_URI_DEV
// console.log("MONGODB URI", MONGODB_URI)

// if (process.env.NODE_ENV === 'test'){
//     MONGODB_URI = process.env.MONGODB_URI_TEST
// } else if (process.env.NODE_ENV === 'development'){
//     MONGODB_URI = process.env.MONGODB_URI_DEV
// }

module.exports = {
    MONGODB_URI,
    PORT
}