// ------------------------------
// Mailer Model
// ------------------------------

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MailSchema = new Schema({
  from: {
    type: String,
    required: true,
    trim: true,
  },
  to: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
  },
  body: {
    type: String,
  },
},
{
  timestamps: true,
  toJSON: { virtuals: true },
})

MailSchema.pre('save', async function (next) {
  // const mail = this

  next()
})

const Mail = mongoose.model('Mail', MailSchema)
module.exports = Mail
