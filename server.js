const express = require('express');
const app = express();
const Port = 3333;
const cors = require('cors')
const bodyParser = require('body-parser')

require('./db/db')

const AdminLogin = require("./routes/Admin/Login/AdminLogin")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/Admin",AdminLogin)

app.listen(Port , ()=>{
    console.log(`Server Running on the PORT ${Port}`)
})