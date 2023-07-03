const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mainPage = new Schema({
    name : String , 
    mainimage : {type : String},
})

const MainPageModel = mongoose.model('MainPage',mainPage);
module.exports = MainPageModel
