const AdminMainData = require('../../../models/Admin/Data/Admin_Main_data');
let path =''
let len ;
module.exports = {
    adddata:function(req,res,next){
        let mainImage = null;
        let colorImages = [];
        let wheelImages = [];
        let interiorImages = [];
        let lightImages = [];
      
        if (req.files) {
          if (req.files.mainimage) {
            mainImage = req.files.mainimage[0].filename;
          }
      
          if (req.files.colorimage) {
            colorImages = req.files.colorimage.map(file => file.filename);
          }
      
          if (req.files.wheelimage) {
            wheelImages = req.files.wheelimage.map(file => file.filename);
          }
      
          if (req.files.interiorimage) {
            interiorImages = req.files.interiorimage.map(file => file.filename);
          }
      
          if (req.files.lightimage) {
            lightImages = req.files.lightimage.map(file => file.filename);
          }
        }
        AdminMainData.create({
            name : req.body.name, 
            price : req.body.price,
            milage : req.body.milage,
            power : req.body.power,
            mainimage: mainImage,
            colorimage: colorImages,
            wheelimage: wheelImages,
            interiorimage: interiorImages,
            lightimage: lightImages
        },(err , result)=>{
            if(!err){
                res.send("DATA : Inserted Successfully")
            }
            else{
                console.log("Error : ",err)
            }
        })
    },
    
    getdata:function(req,res){
        AdminMainData.find({},(err,result)=>{
            if(!err){
                console.log(result)
                res.send(result)
            }
            else{
                console.log("Error")
            }
        })
    },
    
    getonedata:function(req,res){
        AdminMainData.findOne({name : req.body.name},(err,result)=>{
          if(!err){
            res.send(result);
          }
          else{
            console.log("Error")
          }
        })
    },
    
    updatadata:function(req,res){
      let mainImage = null;
      let colorImages = [];
      let wheelImages = [];
      let interiorImages = [];
      let lightImages = [];
    
      if (req.files) {
        if (req.files.mainimage) {
          mainImage = req.files.mainimage[0].filename;
        }
    
        if (req.files.colorimage) {
          colorImages = req.files.colorimage.map(file => file.filename);
        }
    
        if (req.files.wheelimage) {
          wheelImages = req.files.wheelimage.map(file => file.filename);
        }
    
        if (req.files.interiorimage) {
          interiorImages = req.files.interiorimage.map(file => file.filename);
        }
    
        if (req.files.lightimage) {
          lightImages = req.files.lightimage.map(file => file.filename);
        }
      }
      AdminMainData.findOneAndUpdate({name:req.body.name},
        {
          price : req.body.price,
          milage : req.body.milage,
          power : req.body.power,
          mainimage: mainImage,
          colorimage: colorImages,
          wheelimage: wheelImages,
          interiorimage: interiorImages,
          lightimage: lightImages
        }
        ,(err,result)=>{
        if(!err){
          res.send("Data Updated")
          console.log("Data Updated")
        }
        else{
          console.log("Error")
        }
      })
    },

    deletedata:function(req,res){
      AdminMainData.findOneAndDelete({name:req.body.name},(err,result)=>{
        if(!err){
          res.send("Data Deleted")
          console.log("Deleted Data : ")
        }
        else{
          console.log("Error")
        }
      })
    }
}