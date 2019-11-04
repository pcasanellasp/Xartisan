// ------------------------------
// User Controller
// ------------------------------

const User = require('../models/User')

async function get (req, res, next) {
  try {
    const users = await User.find({}).lean()
    return res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

async function create (req, res, next) {
  // Create a new user
  try {
    const user = new User(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  get,
  create,
}
