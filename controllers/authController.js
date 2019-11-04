// ------------------------------
// Auth Controller
// ------------------------------

const User = require('../models/User')

async function get (req, res, next) {
  try {
    return res.status(200).json('Auth API')
  } catch (error) {
    next(error)
  }
}

async function login (req, res, next) {
  // Login a registered user
  try {
    const { email, password } = req.body
    const user = await User.findByCredentials(email, password)
    if (!user) {
      return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
    }
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (error) {
    res.status(400).send(error)
  }
}

async function logout (req, res, next) {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function logoutAll (req, res, next) {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length)
    await req.user.save()
    res.send()
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  get,
  login,
  logout,
  logoutAll,
}
