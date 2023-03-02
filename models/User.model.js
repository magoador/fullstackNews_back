const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  login: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
