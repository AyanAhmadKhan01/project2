const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: {type: String, required: true, unique: true},
   email: {type: String, required: true},
   password: {type: String, required: true},
   createdAt: {type: Date, default: Date.now()},
   isPremium: {type: Boolean, default: false},
   referralCode: { type: String, default: function () {return this.username} },
   referredBy: {type: String, default: ''},
   role: { type: String, enum: ["user", "admin"], default: "user",},
   badges: [{
      type: String, 
      earnedAt: {type: Date, default: Date.now()}}],
})

const User = mongoose.model('User', userSchema);

module.exports = User;