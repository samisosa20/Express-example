"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = require("../../api/controllers/users");

// Controlles
var user = function user(app) {
  app.get("/:name", function (req, res) {
    res.status(200).json({
      name: req.params.name
    });
  });
  app.get("/user/protect/:name", function (req, res) {
    var validateToken = (0, _users.verifyToken)(req);

    if (validateToken.status) {
      res.status(200).json({
        name: req.params.name
      });
    } else {
      res.status(202).json({
        result: validateToken.mensaje
      });
    }
  });
  app.post("/user/:name", function (req, res) {
    res.status(200).json({
      name: req.params.name
    });
  });
  app.post("/new/user", function (req, res) {
    var obj = {
      name: req.body.name,
      lastName: req.body.lastName,
      password: (0, _users.passwordHash)(req.body.password),
      year: req.body.year
    };
    res.status(200).json({
      result: obj,
      token: (0, _users.createtokenLogin)(obj)
    });
  });
  return app;
};

var _default = user;
exports["default"] = _default;