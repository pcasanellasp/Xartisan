// ------------------------------
// Welcome Routes
// ------------------------------

const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

// --------------------
router.get('/', authController.get)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/logoutAll', authController.logoutAll)

module.exports = router
