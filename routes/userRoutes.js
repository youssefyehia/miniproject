var express=require("express");
var router = express.Router();


router.get("/", function(req, res){
  res.render("mainview.ejs");
});
router.get("/form", function(req,res){
  res.render("form.ejs");
});
router.get("/signup", function(req, res){
  res.render("signup.ejs");
});
router.get("/response", function(req, res){
  res.render("registerresponse.ejs");
});
router.get("/myporto", function(req, res){
  res.render("myporto.ejs");
});


router.post("/post", function(req, res){
  User.create({
    username: req.body.username,
    password: req.body.password
  }, function(err, user){
    if(err){
      console.log(err);
    } else {
      console.log(user);
      res.redirect("/");
    }
  })
});
router.get("/mainview", function(req,res){
  res.render("mainview.ejs")
});

module.exports = router;
