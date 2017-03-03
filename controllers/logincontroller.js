var logcontroller = require('../models/user');
let logincontroller = {
  GetStudentAcc:function(req,res){
    loginModel.find({username:req.body.username}, function(err){
      if(err){
        res.send(err.message)
      }
    }
  }),
  LoginStudent:function(req,res){
    loginModel.find(function(err){
      if(err){
        res.send(err.message);
      }
      else{
        res.render('mainview');
      }
    })
  }
  }
module.exports = logincontroller;
