const Admin_Model_data = require("../../../models/Admin/Data/Admin_Model_Data")


module.exports = {
    add:function (req,res,next){
        let mainImage = null;
        if(req.files){
            if (req.files.mainimage) {
                mainImage = req.files.mainimage[0].filename;
            }
        }
        Admin_Model_data.create({
            carname : req.body.carname,
            carmodel : req.body.carmodel ,
            price : req.body.price,
            milage : req.body.milage,
            power : req.body.power,
            mainimage: mainImage,
        },(err, result)=>{
            if(!err){
                console.log(result)
                res.send("Data inserted Successfully")
            }
            else{
                console.log("Error")
            }
        })
    }
}