const express = require("express")
const router = express.Router()
const UserOrderController = require("../../../api/controller/Admin/Data/UserOrder")

router.post("/AddtoCart" , UserOrderController.adddata)

module.exports = router