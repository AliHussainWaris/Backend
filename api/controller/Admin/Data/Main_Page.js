const MainPageModel = require('../../../models/Admin/Data/Main_Page');
module.exports = {
    adddata:function(req , res ,next){
        let mainImages = null;
        if(req.files){
            if (req.files.mainimage) {
                mainImages = req.files.mainimage[0].filename;
            }
        }
        MainPageModel.create({
            name : req.body.name , 
            mainimage : mainImages
        } , (err)=>{
            if(!err){
                console.log("Data Inserted Successfully")
                res.send("Data Inserted Successfully")
            }
            else{
                console.log("Failed to Insert the Data")
                res.send("Failed to Insert the Data")
            }
        })
    },
    getdata:function(req,res){
        MainPageModel.find({},(err,result)=>{
            if(!err){
                console.log("Data Fetch Succesfully")
                res.send(result)
            }
            else{
                console.log("Error")
            }
        })
    },
    getonedata: function(req, res) {
        MainPageModel.findOne({
          name: req.body.name
        }, (err, result) => {
          if (err) {
            console.log("Error:", err);
            res.status(500).send("Data Fetch Failed");
          } else if (!result) {
            console.log("Document not found");
            res.status(404).send("Document not found");
          } else {
            console.log("Data Fetched Successfully:" , req.body.name , result);
            res.send(result);
          }
        });
    },
    deleteonedata:function(req, res){
        MainPageModel.deleteOne({
            name:req.body.name
        },(err)=>{
            if(!err){
                res.send("Data Deleted Successfully")
                console.log("Data Deleted Successfully")
            }
            else{
                console.log("Data Deleting Failed")
                res.send("Data Deleting Failed")
            }
        })
    } 
}