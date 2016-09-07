const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // email: {
  //   type: String,
  //   unique: true,
  // },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
