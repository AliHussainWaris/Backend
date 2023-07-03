const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AdminMainData = new Schema({
    name : String , 
    price : Number ,
    milage : Number , 
    power : Number , 
    mainimage : {type:String}, 
    colorimage: {type:Array},
    wheelimage: {type:Array},
    interiorimage: {type:Array},
    lightimage: {type:Array},
})

const AdminMainDataModel = mongoose.model('Main' , AdminMainData);
module.exports = AdminMainDataModel