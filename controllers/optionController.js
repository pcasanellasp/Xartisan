// ------------------------------
// Option Controller
// ------------------------------

const Option = require('../models/Option')

async function get (req, res, next) {
  try {
    let params = {}
    if (req.query.category) {
      params = {
        'category': { $in: [
          req.query.category,
        ],
        },
      }
    }

    const options = await Option.find(params).lean()
    return res.status(200).json(options)
  } catch (error) {
    next(error)
  }
}

async function show (req, res, next) {
  try {
    const option = await Option.findOne({ option_key: req.params.id }).lean()
    if (option) {
      return res.status(200).json(option)
    }
    return res.status(400).json({ message: 'No Option Found' })
  } catch (error) {
    next(error)
  }
}

async function create (req, res, next) {
  // Create a new option
  try {
    const option = new Option(req.body)
    await option.save()
    res.status(201).json({ option })
  } catch (error) {
    next(error)
  }
}

async function update (req, res, next) {
  try {
    const option = await Option.findOneAndUpdate(
      { option_key: req.params.id },
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      },
    )
    return res.status(200).json(option)
  } catch (error) {
    error.statusCode = 403
    next(error)
  }
}

async function remove (req, res, next) {
  // Remove Option
  try {
    await Option.findOneAndDelete({ option_key: req.params.id })
    res.status(202).json('Option Deleted')
  } catch (error) {
    next(error)
  }
}

module.exports = {
  get,
  show,
  create,
  update,
  remove,
}
