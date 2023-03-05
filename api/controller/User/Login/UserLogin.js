const UserLoginModel = require("../../../models/User/Login/UserLogin")
module.exports = {
    adddata:function(req,res){
        UserLoginModel.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        },(err , result)=>{
            if(!err){
                console.log("Data Inserted Successfully : ",result)
                res.send(`Data Inserted Successfully : ${result}`)
                res.status(200)
            }
            else{
                console.log("Not Working : " , err)
            }
        })
    },
    getdata:function(req,res){
        UserLoginModel.find({},(err,result)=>{
            if(!err){
                res.send(result)
            }
            else{
                console.log("Error : ",err)
                res.status(404)
            }
        })
    },
    getonedata:function(req,res){
        UserLoginModel.findOne(
            {email:req.body.email},
            (err,result)=>{
                if(!err){
                    res.send(result)
                }
                else{
                    console.log("Error : ",err)
                    res.status(404)
                }
            })
    },
    updatadata:function(req,res){
        UserLoginModel.findOneAndUpdate({email:req.body.email}, 
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
        UserLoginModel.findOneAndDelete({email:req.body.email},(err,result)=>{
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