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
    getondata:function(req,res){
        AdminLogins.findOne({
            email:req.body.email
        },(err,result)=>{
            if(!err){
                console.log(result)
                res.send(result)
            }
            else{
                console.log("Error Occured : " ,err)
            }
        })
    }
}