"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _expressValidator = require("express-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connection = _mysql["default"].createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test"
});

var validator = [(0, _expressValidator.param)("id").isInt().withMessage("id debe ser un numero entero")];
var validatorPost = [(0, _expressValidator.body)("year").not().isEmpty().withMessage("El campo year no debe ser vacio").isLength({
  min: 2,
  max: 2
}).withMessage("year debe ser de dos digitos").isInt().withMessage("year debe ser un numero entero"), (0, _expressValidator.body)("name").not().isEmpty().withMessage("El campo name no debe ser vacio").isString().withMessage("name debe ser una string").isLength({
  min: 3,
  max: 100
}).withMessage("name debe ser entre 3 a 100 caracteres")];
connection.connect();

var clients = function clients(app) {
  app.get("/clients/all", function (req, res) {
    var sql = "SELECT nombre, apellido, edad FROM clientes";
    connection.query(sql, function (error, results) {
      if (error) throw error;

      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({
          result: "Not result"
        });
      }
    });
  });
  app.get("/clients/:id", validator, function (req, res) {
    if (!(0, _expressValidator.validationResult)(req).isEmpty()) {
      res.status(200).json({
        result: (0, _expressValidator.validationResult)(req)
      });
    } else {
      var sql = "SELECT nombre, apellido, edad FROM clientes WHERE id = ".concat(req.params.id);
      connection.query(sql, function (error, results) {
        if (error) throw error;

        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(200).json({
            result: "Not result"
          });
        }
      });
    }
  });
  app.post("/clients/new", validatorPost, function (req, res) {
    if (!(0, _expressValidator.validationResult)(req).isEmpty()) {
      res.status(200).json({
        result: (0, _expressValidator.validationResult)(req)
      });
    } else {
      var sql = "INSERT INTO clientes SET ?";
      var customerObj = {
        nombre: req.body.name,
        apellido: req.body.lastName,
        edad: req.body.year
      };
      connection.query(sql, customerObj, function (error) {
        if (error) res.status(400).json({
          result: error
        });
        res.status(201).json({
          result: "Client created!"
        });
      });
    }
  });
  app.put("/clients/update/:id", function (req, res) {
    var sql = "UPDATE clientes SET nombre = '".concat(req.body.name, "', apellido = '").concat(req.body.lastName, "', edad = ").concat(req.body.year, " WHERE id = ").concat(req.params.id);
    connection.query(sql, function (error) {
      if (error) res.status(400).json({
        result: error
      });
      res.status(200).json({
        result: "Client updated!"
      });
    });
  });
  app["delete"]("/clients/delete/:id", function (req, res) {
    var sql = "DELETE FROM clientes WHERE id = ".concat(req.params.id);
    connection.query(sql, function (error) {
      if (error) res.status(400).json({
        result: error
      });
      res.status(200).json({
        result: "Client deleted!"
      });
    });
  }); //connection.end();
};

var _default = clients;
exports["default"] = _default;