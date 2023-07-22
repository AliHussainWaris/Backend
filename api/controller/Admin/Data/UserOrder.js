const UserData = require("../../../models/Admin/Data/UserOrder");

module.exports = {
  adddata: function (req, res, next) {
    UserData.create(
      {
        userid: req.body.userid,
        name: req.body.name,
        email: req.body.email,
        carname: req.body.carname,
        carmodel: req.body.carmodel,
        carprice: req.body.carprice,
        carcolor: req.body.carcolor,
        carlight: req.body.carlight,
        carwheel: req.body.carwheel,
      },
      (err, result) => {
        if (!err) {
          res.send(result);
          console.log("Added to Cart");
        } else {
          console.log(result);
          res.status(500).send("Error");
          console.error("Error", err);
        }
      }
    );
  },
  getdata:function(req,res){
    UserData.find((err,result)=>{
        if(!err){
            res.status(200).send(result)
            console.log(result)
        }
        else{
            console.log("Error Occured : " , err)
        }
    })
  },
  deleteone:function(req ,res){
    UserData.deleteOne({_id:req.body._id},(err)=>{
      if(!err){
        res.send("Delete Successfully")
        console.log("Delete Successfully")
      }
      else{
        console.log("Error" , err)
      }
    })
  }
};
