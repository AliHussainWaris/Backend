const AdminLogins = require('../../../models/Admin/Login/AdminLogin')

module.exports = {
    adddata : function(req, res , next){
        AdminLogins.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        },(err , result)=>{
            if(!err){
                console.log(result);
                res.status(200)
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
    getonedata:function(req,res){
        AdminLogins.findOne({email:req.body.email},
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
                console.log("Data Deleted")
            }
            else{
                console(err)
            }
        })
    }
}