const express = require('express');
const app = express();
const Port = 3333;
const cors = require('cors')
const bodyParser = require('body-parser')

require('./db/db')

const AdminLogin = require("./routes/Admin/Login/AdminLogin")
const MainPage = require('./routes/Admin/Data/Main_Page')
const ModelPage = require('./routes/Admin/Data/Model_Page')
const UserOrder = require("./routes/Admin/Data/UserOrder")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Admin API's
app.use('/uploads', express.static('uploads'));
app.use("/Admin",AdminLogin)
app.use("/MainPage" , MainPage)
app.use("/ModelPage" , ModelPage)
app.use("/UserOrder" , UserOrder)

app.listen(Port , ()=>{
    console.log(`Server Running on the PORT ${Port}`)
})