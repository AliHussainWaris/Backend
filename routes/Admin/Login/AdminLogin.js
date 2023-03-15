const express = require("express")
const router = express.Router()
const multer = require("multer")
const AdminLoginSystem = require("../../../api/controller/Admin/Login/AdminLogin")

const first = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + file.originalname);
    }

})
const second = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === "image/webp" || file.mimetype === "image/ico") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: first, filefilter: second });

router.post("/register" , upload.single('profile'),AdminLoginSystem.adddata)
router.get("/read" , AdminLoginSystem.getdata)
router.post("/single", AdminLoginSystem.getonedata);
router.put("/updates/:email" , AdminLoginSystem.updatadata);
router.delete("/delete/:email",AdminLoginSystem.deletedata);

module.exports = router