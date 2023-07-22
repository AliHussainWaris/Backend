const express = require("express")
const router = express.Router()
const multer = require("multer")
const AdminLoginSystem = require("../../../api/controller/Admin/Login/AdminLogin")

router.post("/register" , AdminLoginSystem.adddata)
router.get("/read" , AdminLoginSystem.getdata)
router.get("/readAdmin" , AdminLoginSystem.getAdmindata)
router.post("/single", AdminLoginSystem.getonedata);
router.put("/updates/:email" , AdminLoginSystem.updatadata);
router.delete("/delete/",AdminLoginSystem.deletedata);

module.exports = router