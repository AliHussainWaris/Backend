const express = require("express")

const router = express.Router()

const AdminLoginSystem = require("../../../api/controller/Admin/Login/AdminLogin")

router.post("/register" , AdminLoginSystem.adddata)

module.exports = router