const mongoose = require('mongoose')
const mongoDB = "mongodb://127.0.0.1:27017/backend"

mongoose.connect(mongoDB ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err)=>{
    if(err){
        console.log("Not Working" ,err)
    }
    else{
        console.log("Connection Successfully")
    }
})

module.exports = mongoose