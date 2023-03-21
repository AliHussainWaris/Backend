const express = require('express');
const app = express();
const Port = 3333;
const cors = require('cors')
const bodyParser = require('body-parser')

require('./db/db')

const AdminLogin = require("./routes/Admin/Login/AdminLogin")
const UserLogin = require("./routes/User/Login/UserLogin")
const Admin_Main_Data = require('./routes/Admin/Data/AdminMainData')
const Admin_Model_Data = require("./routes/Admin/Data/AdminModelData")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Admin API's
app.use("/Admin",AdminLogin)
app.use("/AdminMainData" , Admin_Main_Data)
app.use("/AdminModelData" , Admin_Model_Data)

app.use("/User",UserLogin)

app.listen(Port , ()=>{
    console.log(`Server Running on the PORT ${Port}`)
})