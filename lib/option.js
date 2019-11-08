
const Option = require('../models/Option')

async function getOption (key) {
  const option = await Option.findOne({ option_key: key }).lean()
  return option
}

async function getOptions (filter) {
  const options = await Option.find(filter).lean()
  return options
}

module.exports = {
  getOption,
  getOptions,
}
