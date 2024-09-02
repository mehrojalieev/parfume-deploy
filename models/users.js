const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    }
})

const Users = mongoose.model("users", usersSchema)

module.exports = Users