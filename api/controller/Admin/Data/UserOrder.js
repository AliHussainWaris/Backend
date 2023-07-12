const UserData = require("../../../models/Admin/Data/UserOrder");

module.exports = {
  adddata: function (req, res, next) {
    UserData.create(
      {
        userid: req.body.userid,
        name: req.body.name,
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
};
