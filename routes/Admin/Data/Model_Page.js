const express = require('express')
const route = express.Router()
const multer = require('multer')
const ModelPageController = require("../../../api/controller/Admin/Data/Model_Page")

const first = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
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


route.post("/Post" ,upload.fields([{name : "carimage" , maxCount:1} , {name : 'productimage'} , {name : 'threesixty'}]) ,ModelPageController.adddata);
route.get("/GetAll", ModelPageController.getall)
route.get("/Get", ModelPageController.getdata)
route.get('/single',ModelPageController.getonedata);
route.delete('/Delete' , ModelPageController.deletedata);
module.exports = route