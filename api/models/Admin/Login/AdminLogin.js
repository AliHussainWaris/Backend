const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AdminLoginSchema = new Schema({
    name : String, 
    email : String,
    password : String
})

const AdminLogins = mongoose.model('Admin' , AdminLoginSchema);
module.exports =  AdminLogins