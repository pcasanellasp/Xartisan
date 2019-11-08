// ------------------------------
// Option Routes
// ------------------------------

const express = require('express')
const router = express.Router()
const optionController = require('../controllers/optionController')
const { auth, allow } = require('../middlewares/auth')

// --------------------
router.get('/', auth, allow('admin'), optionController.get)
router.get('/:id', auth, allow('admin'), optionController.show)
router.post('/', auth, allow('admin'), optionController.create)
router.patch('/:id', auth, allow('admin'), optionController.update)
router.delete('/:id', auth, allow('admin'), optionController.remove)

module.exports = router
