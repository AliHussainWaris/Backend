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
      getdata: function (req, res) {
        const carName = req.query.name; // Assuming the query parameter is used in the URL like "/Get?name=Taycan"

        // console.log("Checking: ", req.body.name);
        ModelPageModel.find({ name: carName }, (err, result) => {
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
        if (carColor === "Default"){
          carColor = "Silver";
        }
        ModelPageModel.findOne({name:carName , model:carModel , color:carColor},(err,result)=>{
            if(err){
                console.log("Data Fetch Failed")
            }
            else{
                console.log("Data Fetch Successfully - Single Data - Model")
                res.send([result])
            }
        })
    }
}