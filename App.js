//var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://SignUp:signup123@ds219983.mlab.com:19983/goodquestion";
let mongoose = require("mongoose")
mongoose.connect(url, function(err, db) {
  if (err) console.log("sjdbajsvbd");
  else
  console.log("Database created!");
});
