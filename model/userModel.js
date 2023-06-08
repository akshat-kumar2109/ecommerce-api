const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: {
        type: String,
        require,
        maxLength: [30, "Name shouldn't be longer than 30 characters"]
    },
    password: {
        type: String,
        require,
        minLength: [8, "Password shouldn't be smaller than 8 characters"]
    },
    email: {
        type: String,
        require
    },
    phone: {
        type: Number,
        length: 10,
        require
    },
})

module.exports = mongoose.model("Users", userSchema)
