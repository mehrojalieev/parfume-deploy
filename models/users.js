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
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        default: "user"
    }
}, {strict: true})

const Users = mongoose.model("users", usersSchema)

module.exports = Users