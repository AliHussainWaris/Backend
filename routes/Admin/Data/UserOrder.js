const express = require("express")
const router = express.Router()
const UserOrderController = require("../../../api/controller/Admin/Data/UserOrder")

router.post("/AddtoCart" , UserOrderController.adddata)
router.get("/read" , UserOrderController.getdata)
router.delete("/delete" , UserOrderController.deleteone)

module.exports = router