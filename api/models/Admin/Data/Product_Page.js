const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductPage = new Schema({
    name : String , 
    carimage : String
})

const ProductPageModel = mongoose.model('Product' , ProductPage);

module.exports = ProductPageModel