const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductPageSchema = new Schema(
  {
    userid: String ,
    name: String,
    carname: String,
    carmodel: String,
    carprice: Number,
    carcolor: String,
    carwheel: String,
    carlight: String,
  }
);

const ProductPageModel = mongoose.model("UserData", ProductPageSchema);

module.exports = ProductPageModel;
