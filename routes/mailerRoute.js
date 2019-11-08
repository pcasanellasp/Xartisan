// ------------------------------
// Option Routes
// ------------------------------

const express = require('express')
const router = express.Router()
const mailerController = require('../controllers/mailerController')

// --------------------
router.post('/', mailerController.send)

module.exports = router
