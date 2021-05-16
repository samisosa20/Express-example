"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _test = _interopRequireDefault(require("./routes/test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*import user from './routes/user'; */
// guaranteed to get dependencies
var _default = function _default() {
  var app = (0, _express.Router)();
  /*   app.get("", function (req, res) {
      res.send("Hello World!, this is my first API");
    }); */

  (0, _test["default"])(app); //user(app); 

  return app;
};

exports["default"] = _default;