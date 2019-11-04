// ------------------------------
// User Routes
// ------------------------------

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { auth, allow } = require('../middlewares/auth')

// --------------------
router.get('/', auth, allow('admin'), userController.get)
router.post('/', auth, allow('admin'), userController.create)

module.exports = router
