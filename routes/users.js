var mongoose= require('mongoose');

var userSchema = new mongoose.Schema({
  username: {type:String, unique:true},
  password:{type: String},
  firstname:String,
  lastname: String

});

var user=mongoose.model('SignUp', userSchema);

module.exports = user;
