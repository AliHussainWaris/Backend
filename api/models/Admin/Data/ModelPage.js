const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModelPage = new Schema({
    name : String , 
    color : String , 
    wheel: String ,
    light: String ,
    model : String,
    price : Number, 
    milage : String ,
    maxpower  : Number,
    carimage : {type : String} , 
    productimage : {type : Array} , 
    threesixty : {type : Array},

})

const ModelPages = mongoose.model('ModelPage' , ModelPage)
module.exports = ModelPages