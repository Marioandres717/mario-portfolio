exports.handler = (event, _context, callback) => {
  const mailgun = require("mailgun-js")
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  })

  const data = JSON.parse(event.body)
  const email = {
    from: `${data.name} <${data.email}>`,
    to: `Mario Andres <${process.env.EMAIL}>`,
    subject: data.subject,
    text: data.body,
  }

  mg.messages().send(email, (error, response) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response),
    })
  })
}
