const express = require("express")

const router = express.Router()

const AdminLoginSystem = require("../../../api/controller/Admin/Login/AdminLogin")

router.post("/register" , AdminLoginSystem.adddata)
router.get("/read" , AdminLoginSystem.getdata)
router.post("/single", AdminLoginSystem.getonedata);
router.put("/updates/:email" , AdminLoginSystem.updatadata);
router.delete("/delete/:email",AdminLoginSystem.deletedata);

module.exports = router