const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserLogin = new Schema({
    name:String,
    email:String,
    password : String
})

const UserLoginModel = mongoose.model('UserLogin' , UserLogin)

module.exports = UserLoginModel