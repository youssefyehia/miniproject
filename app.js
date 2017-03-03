//REQUIRE PACKAGES
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// CONFIG DATABASE
mongoose.connect("mongodb://localhost:27017/demo");

var User = require("./models/user");
var Student = require("./models/student");
//CONFIG APP
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

// REQUIRE ROUTES
var userRoutes = require("./routes/userRoutes");
app.use(userRoutes);

// INITIALIZING SERVER
app.listen(8080, function(){
  console.log("Server is running on port 8080 ");
});
