const express = require("express")
const route = express.Router()
const multer = require("multer")
const Admin_Model_Data = require("../../../api/controller/Admin/Data/Admin_Model_Data")

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


route.post("/adddata" ,upload.fields([{name : "mainimage" , maxCount:1}]) ,Admin_Model_Data.add);

module.exports = route