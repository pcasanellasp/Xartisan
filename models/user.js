// ------------------------------
// User Model
// ------------------------------

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  toJSON: { virtuals: true },
})

const User = mongoose.model('User', UserSchema)
module.exports = User
