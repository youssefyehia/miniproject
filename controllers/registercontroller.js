var stregister = require('.. models/student');

let registercontroller = {
  getAllStudents:function(req, res){
    StudentRegister.find(function(err,projects){
      if(err)
      res.send(err.message);
      else {
        res.render('signup',{projects});

    })
  },
  createStudent:function(req, res){
    let Register = new Register(req.body);
    Register.save(function(err,RegisterModel){
      if(err){
        res.send(err.message)
        console.log(err);
      }
      else{
        console.log(student);
        res.redirect('/form');
      }
    })
  }
}
module.exports = registercontroller;
