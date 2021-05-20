"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _test = _interopRequireDefault(require("./routes/test"));

var _user = _interopRequireDefault(require("./routes/user"));

var _client = _interopRequireDefault(require("./routes/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Packages
// Routes
var _default = function _default() {
  var app = (0, _express.Router)();
  (0, _test["default"])(app);
  (0, _user["default"])(app);
  (0, _client["default"])(app);
  return app;
};

exports["default"] = _default;