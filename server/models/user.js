const mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  config = require("../../config/config").get(process.env.NODE_ENV);

const SALT_I = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    maxlength: 60
  },
  lastname: {
    type: String,
    maxlength: 60
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

//middlewares
userSchema.pre("save", function(next){
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(SALT_I, function(err, salt){
      if(err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next()
      })
    })
  } else {
    next()
  }
})
//method to compare passwords
userSchema.methods.comparePassword = function(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatchBoolean){
    if(err) return cb(err);
    cb(null, isMatchBoolean); // null == err
  })
}
//method to generate jwt token
userSchema.methods.generateToken = function(cb){
  var user = this;
  var newToken = jwt.sign(user._id.toHexString(), config.SECRET);

  user.token = newToken;
  user.save(function(err, user){
    if(err) return cb(err);
    cb(null, user)
  })
}

const User = mongoose.model("User", userSchema);

module.exports = { User };
