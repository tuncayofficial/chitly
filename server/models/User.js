const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username : String,
    password : String,
    email : String,
    avatar : String,
    status : {
        type : String,
        default : "Online"
    },
    bio : String,
    notifications : Number
})

const User = mongoose.model("User", UserSchema)

module.exports = User