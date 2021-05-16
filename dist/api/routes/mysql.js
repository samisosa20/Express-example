"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test"
});
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
  app.get("/clients/:id", function (req, res) {
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
  });
  app.post("/clients/new", function (req, res) {
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
      res.status(200).json({
        result: "Client created!"
      });
    });
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