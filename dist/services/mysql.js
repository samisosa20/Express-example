"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var asyncHandler = require('express-async-handler');

var connection = _mysql["default"].createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test"
});

connection.connect();

var query = function query(method, req) {
  var sql = "";

  switch (method) {
    case "GETALL":
      sql = "SELECT nombre, apellido, edad FROM clientes";
      break;

    case "GETID":
      sql = "SELECT nombre, apellido, edad FROM clientes WHERE id = ".concat(req.params.id);
      break;
  }

  var result = {
    status: 200,
    results: []
  };
  connection.query(sql, function (error, results) {
    if (error) throw new Error(error);

    if (results.length > 0) {
      result.results = results;
    } else {
      result.status = 205;
      result.results.push("Not result");
    }

    return result;
  });
  console.log(returnQuery);
};

var _default = query;
exports["default"] = _default;