"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// config() leerá su archivo .env, analizará el contenido, lo asignará a process.env.
_dotenv["default"].config();

var config = {
  port: process.env.PORT,
  apiVersion: process.env.API_VERSION,
  hash: process.env.HASH,
  salt: process.env.SALT,
  mysql: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB_NAME
  },
  jwt: {
    apiKey: process.env.JWT_SECRET,
    expire: process.env.JWT_TIME
  }
};
module.exports = config;