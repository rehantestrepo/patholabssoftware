const mongoose = require('mongoose');

const user = new mongoose.Schema({ 
    username: String,
    password: String
 });

 module.exports = new mongoose.model("User", user)