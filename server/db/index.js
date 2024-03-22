const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
  });

const artSchema = new mongoose.Schema({
  username: String,
  name : String,
  imgLink: String,
  artistName: String,
  description: String
})

const User = mongoose.model('User', userSchema);
const Art = mongoose.model('Art', artSchema);
  module.exports = {
    User,
    Art
  }