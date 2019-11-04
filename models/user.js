// ------------------------------
// User Model
// ------------------------------

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  timestamps: true,
  toJSON: { virtuals: true },
})

const User = mongoose.model('User', UserSchema)
module.exports = User
