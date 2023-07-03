const express = require('express')
const route = express.Router()
const multer = require('multer')

const MainPageController = require('../../../api/controller/Admin/Data/Main_Page');

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


route.post("/Post" ,upload.fields([{name : "mainimage" , maxCount:1}]) ,MainPageController.adddata);
route.get("/Get", MainPageController.getdata)
route.get('/single',MainPageController.getonedata);
route.delete('/deleteone' , MainPageController.deleteonedata);
module.exports = route