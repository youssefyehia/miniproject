var mongoose = require("mongoose");

var userSchema1 = new mongoose.Schema({

  FirstName: String,
  LastName: String,
  username: String,
  password: String,
  Age: String,
  University: String
});

var Student = mongoose.model("Student", userSchema1);

module.exports = Student;
