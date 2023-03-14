const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AdminMainData = new Schema({
    carname : String , 
    carmodel : String,
    price : Number ,
    milage : Number , 
    power : Number , 
    mainimage : String , 
    colorimage : String, 
    wheelimage : String, 
    interiorimage : String,
    lightimage : String
})

const AdminMainDataModel = mongoose.model('Models' , AdminMainData);
module.exports = AdminMainDataModel