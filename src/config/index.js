const dotenv = require('dotenv');
// config() leerá su archivo .env, analizará el contenido, lo asignará a process.env.
dotenv.config();

const config = {
  port: process.env.PORT,
  mysql: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB_NAME,
  },
  paypal: {
    publicKey: process.env.PAYPAL_PUBLIC_KEY,
    secretKey: process.env.PAYPAL_SECRET_KEY,
  },
  mailchimp: {
    apiKey: process.env.MAILCHIMP_API_KEY,
    sender: process.env.MAILCHIMP_SENDER,
  }
}

module.exports = config;