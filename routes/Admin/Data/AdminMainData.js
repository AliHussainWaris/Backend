const express = require("express")
const multer = require("multer")
const router = express.Router()
const Admin_Main_Data = require("../../../api/controller/Admin/Data/Admin_Main_Data")

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

router.post('/upload' , upload.fields([{ name: 'mainimage', maxCount: 1 }, { name: 'colorimage' } , {name:'wheelimage'} , {name : 'interiorimage'},{name:'lightimage'}]) , Admin_Main_Data.adddata)
router.get('/all',Admin_Main_Data.getdata);

module.exports = router
