const ModelPageModel = require("../../../models/Admin/Data/ModelPage")

module.exports = {
    adddata: function (req, res, next) {
        let carImages = null;
        let productImages = [];
        let threeSixtys = [];
      
        if (req.files) {
          if (req.files.carimage) {
            carImages = req.files.carimage[0].filename;
          }
          if (req.files.productimage) {
            productImages = req.files.productimage.map(file => file.filename);
          }
          if (req.files.threesixty) {
            threeSixtys = req.files.threesixty.map(file => file.filename);
          }
        }
        ModelPageModel.create({
          name: req.body.name,
          color: req.body.color,
          wheel: req.body.wheel,
          light: req.body.light,
          model: req.body.model,
          price: req.body.price,
          milage: req.body.milage,
          maxpower: req.body.maxpower,
          carimage: carImages,
          productimage: productImages,
          threesixty: threeSixtys,
        }, (err) => {
          if (!err) {
            console.log("Data Inserted Successfully");
            res.send("Data Inserted Successfully");
          } else {
            console.log("Failed to Insert the Data");
            res.send("Failed to Insert the Data");
          }
        });
      },
      getall: function (req, res) {
        ModelPageModel.find({}, (err, result) => {
          if (err) {
            console.log("Data Fetch Failed", err);
            res.status(500).json({ error: "Failed to fetch data" });
          } else {
            console.log("Data Fetch Successful - Model Page");
            res.send(result);
          }
        });
      },    
      getdata: function (req, res) {
        const carName = req.query.name;
        const carColor = req.query.carcolor;
        ModelPageModel.find({ name: carName  , color : carColor}, (err, result) => {
          if (err) {
            console.log("Data Fetch Failed", err);
            res.status(500).json({ error: "Failed to fetch data" });
          } else {
            console.log("Data Fetch Successful - Model Page");
            res.send(result);
          }
        });
      },
    getonedata:function(req,res){
        const carName = req.query.name;
        const carModel = req.query.model;
        let carColor = req.query.color;
        let carWheel = req.query.wheel;
        let carLight = req.query.light;
        if (carColor === "Default"){
          carColor = "Silver";
        }
        if(carWheel === "Default"){
          carWheel = "Steel";
        }
        if(carLight === "Default"){
          carLight = "Normal";
        }
        ModelPageModel.findOne({name:carName , model:carModel , color:carColor , wheel:carWheel , light:carLight},(err,result)=>{
            if(err){
                console.log("Data Fetch Failed")
            }
            else{
                console.log("Data Fetch Successfully - Single Data - Model")
                res.send([result])
            }
        })
    },
    deletedata: function (req, res) {
      let carName = req.query.name;
      let carModel = req.query.model;
      let carColor = req.query.color;
    
      ModelPageModel.deleteOne(
        {
          name: carName,
          model: carModel,
          color: carColor
        },
        (err) => {
          if (!err) {
            console.log("Data Deleted Successfully");
            res.send("Data Deleted Successfully");
          } else {
            console.log("Data Deleting Failed");
            res.send("Data Deleting Failed");
          }
        }
      );
    }
    
}