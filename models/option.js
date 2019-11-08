// ------------------------------
// Option Model
// ------------------------------

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OptionSchema = new Schema({
  option_key: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  option_value: {
    type: String,
    required: true,
  },
  context: {
    type: [String],
    enum: ['all', 'auth', 'admin', 'none'],
    required: true,
    default: 'none',
  },
  category: {
    type: [String],
    default: 'none',
  },
},
{
  timestamps: true,
  toJSON: { virtuals: true },
})

OptionSchema.pre('save', async function (next) {
  // const option = this

  next()
})

const Option = mongoose.model('Option', OptionSchema)
module.exports = Option
