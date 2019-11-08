// ------------------------------
// Mailer Controller
// ------------------------------

const Mail = require('../models/Mail')
const mailer = require('nodemailer')
const { getOptions } = require('../lib/option')

async function send (req, res, next) {
  try {
    const options = await getOptions({
      'category': { $in: [
        'mailer',
      ] },
    })
    const config = {}
    options.map(option => {
      config[option.option_key] = option.option_value
    })

    let transporter = mailer.createTransport({
      host: config['mailer_host'] || process.env.APP_MAILER_HOST,
      port: config['mailer_port'] || process.env.APP_MAILER_PORT,
      secure: config['mailer_secure'] || parseInt(process.env.APP_MAILER_SECURE),
      auth: {
        user: config['mailer_user'] || process.env.APP_MAILER_USER,
        pass: config['mailer_pass'] || process.env.APP_MAILER_PASS,
      },
      tls: {
        rejectUnauthorized: config['mailer_secure'] || parseInt(process.env.APP_MAILER_SECURE),
      },
    })
    const mail = new Mail(req.body)

    let info = await transporter.sendMail({
      from: `"${mail.name}" <${mail.from}>`,
      to: mail.to,
      subject: mail.subject,
      text: mail.body,
    })

    return res.status(200).json(info)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  send,
}
