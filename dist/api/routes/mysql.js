"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _mysql = _interopRequireDefault(require("../../services/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validator = [(0, _expressValidator.param)("id").isInt().withMessage("id debe ser un numero entero")];
var validatorPost = [(0, _expressValidator.body)("year").not().isEmpty().withMessage("El campo year no debe ser vacio").isLength({
  min: 2,
  max: 2
}).withMessage("year debe ser de dos digitos").isInt().withMessage("year debe ser un numero entero"), (0, _expressValidator.body)("name").not().isEmpty().withMessage("El campo name no debe ser vacio").isString().withMessage("name debe ser una string").isLength({
  min: 3,
  max: 100
}).withMessage("name debe ser entre 3 a 100 caracteres")];

var clients = function clients(app) {
  app.get("/clients/all", function (req, res) {
    var result = (0, _mysql["default"])('GETALL', req);
    res.status(result.status).json({
      data: result.results
    });
  });
  app.get("/clients/:id", validator, function (req, res) {
    if (!(0, _expressValidator.validationResult)(req).isEmpty()) {
      res.status(200).json({
        data: (0, _expressValidator.validationResult)(req)
      });
    } else {
      var result = (0, _mysql["default"])('GETID', req);
      res.status(result.status).json({
        result: _mysql["default"].results
      });
    }
  });
  /*   app.post("/clients/new", validatorPost, function(req, res) {
     if (!validationResult(req).isEmpty()) {
       res.status(200).json({ result: validationResult(req) });
     } else {
       const sql = `INSERT INTO clientes SET ?`;
       const customerObj = {
         nombre: req.body.name,
         apellido: req.body.lastName,
         edad: req.body.year
       };
       connection.query(sql, customerObj, error => {
         if (error) res.status(400).json({ result: error });
         res.status(201).json({ result: "Client created!" });
       });
     }
   });
   app.put("/clients/update/:id", function(req, res) {
     const sql = `UPDATE clientes SET nombre = '${req.body.name}', apellido = '${req.body.lastName}', edad = ${req.body.year} WHERE id = ${req.params.id}`;
     connection.query(sql, error => {
       if (error) res.status(400).json({ result: error });
       res.status(200).json({ result: "Client updated!" });
     });
   });
   app.delete("/clients/delete/:id", function(req, res) {
     const sql = `DELETE FROM clientes WHERE id = ${req.params.id}`;
     connection.query(sql, error => {
       if (error) res.status(400).json({ result: error });
       res.status(200).json({ result: "Client deleted!" });
     });
   }); */
  //connection.end();
};

var _default = clients;
exports["default"] = _default;