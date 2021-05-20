"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.createtokenLogin = exports.passwordHash = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _express = require("express");

var _config = _interopRequireDefault(require("../../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Package
// Settings
var passwordHash = function passwordHash(value) {
  return _crypto["default"].createHash(_config["default"].hash).update(_config["default"].salt + value).digest("hex");
};

exports.passwordHash = passwordHash;

var createtokenLogin = function createtokenLogin(value) {
  return _jsonwebtoken["default"].sign(value, _config["default"].jwt.apiKey, {
    expiresIn: _config["default"].jwt.expire
  });
};

exports.createtokenLogin = createtokenLogin;

var verifyToken = function verifyToken(req) {
  var token = req.headers["access-token"];
  var result = {
    status: false,
    mensaje: "Token no proveída."
  };

  if (token) {
    _jsonwebtoken["default"].verify(token, _config["default"].jwt.apiKey, function (err, decoded) {
      if (err) {
        result = {
          status: false,
          mensaje: "Token inválida"
        };
      } else {
        result = {
          status: true,
          result: decoded
        };
      }
    });
  }

  return result;
};

exports.verifyToken = verifyToken;