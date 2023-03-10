const express = require('express')
const router = express.Router()
const UserLogin = require('../../../api/controller/User/Login/UserLogin')

router.post("/register" , UserLogin.adddata)
router.get("/read",UserLogin.getdata)
router.post("/single",UserLogin.getonedata)
router.put("/update/:email",UserLogin.updatadata)
router.delete("/delete/:email",UserLogin.deletedata)

module.exports = router