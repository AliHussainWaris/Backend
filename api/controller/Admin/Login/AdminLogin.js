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
            admin : req.body.admin
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
    getdata:function(req,res){
        AdminLogins.find((err,result)=>{
            if(!err){
                res.status(200).send(result)
                console.log(result)
            }
            else{
                console.log("Error Occured : " , err)
            }
        })
    },
    getAdmindata: function (req, res) {
        const isAdmin = req.query.admin;
        AdminLogins.find({ admin: isAdmin }, (err, result) => {
            if (!err) {
                console.log("User Admin:", result);
                res.status(200).send(result);
            } else {
                console.log("Error Occurred:", err);
                res.status(500).send("Error occurred while fetching admin data");
            }
        });
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
        AdminLogins.deleteOne({
            email:req.body.email
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