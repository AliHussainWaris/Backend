const AdminLogins = require('../../../models/Admin/Login/AdminLogin')
var bcrypt = require("bcryptjs")
const salt = bcrypt.genSalt(10)

module.exports = {
    adddata : function(req, res , next){
        let pass = bcrypt.hashSync(req.body.password , 10)
        AdminLogins.create({
            name: req.body.name,
            email: req.body.email,
            password: pass,
        },(err , result)=>{
            if(!err){
                res.status(200)
                console.log(res.password)
                res.send(result)
                console.log("DATA INSERTED SUCCESSFULLY")
            }
            else{
                console.log("Error : " , err)
            }
        })
    },
    getdata:function(){
        AdminLogins.find((err,result)=>{
            if(!err){
                console.log(result)
            }
            else{
                console.log("Error Occured : " , err)
            }
        })
    },
    getonedata: function (req, res) {
        let password = req.body.password;
        AdminLogins.findOne({ email: req.body.email }, (err, admin) => {
          if (!err) {
            if (admin) {
              bcrypt.compare(password, admin.password, (err, isMatch) => {
                if (!err && isMatch ) {
                  res.status(200).send(admin);
                } else {
                  res.status(404).send("Invalid email or password");
                  console.log("Invalid email or password");
                }
              });
            } else {
              res.status(404).send("Admin not found");
              console.log("Admin not found");
            }
          } else {
            console.log("Error occurred:", err);   
          }
        });
    },      
    updatadata:function(req,res){
        AdminLogins.findOneAndUpdate({email:req.body.email}, 
            {name:req.body.name , password : req.body.passwrod},
            {new:true},             
            (err, result)=>{
            if(!err){
                res.send(result)
                console.log(result)
            }
            else{
                console.log("Error Occured : ",err)
            }
        })
    },
    deletedata:function(req,res){
        AdminLogins.findOneAndDelete({email:req.body.email},(err,result)=>{
            if(!err){
                res.send("Data Deleted")
                console.log("Data Deleted",result)
            }
            else{
                console(err)
            }
        })
    }
}