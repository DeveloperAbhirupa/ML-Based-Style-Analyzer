var express = require('express');
var router = express.Router();
var User=require('../lib/User.js');

router.get('/',function(req,res,next){
  res.render('index',{title:'Express'});
});

router.post('/register',function(req,res){
  var username=req.body.username;
  var password=req.body.password;
  var firstname=req.body.firstname;
  var newuser = new User();

  newuser.username=username;
  newuser.password=password;
  newuser.firstname=firstname;
  newuser.save(function(err,saveduser){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  })

})
