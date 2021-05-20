"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

// Packages
var valClient = {
  getId: [(0, _expressValidator.param)("id").isInt().withMessage("id debe ser un numero entero")],
  post: [(0, _expressValidator.body)("year").not().isEmpty().withMessage("El campo year no debe ser vacio").isLength({
    min: 2,
    max: 2
  }).withMessage("year debe ser de dos digitos").isInt().withMessage("year debe ser un numero entero"), (0, _expressValidator.body)("name").not().isEmpty().withMessage("El campo name no debe ser vacio").isString().withMessage("name debe ser una string").isLength({
    min: 3,
    max: 100
  }).withMessage("name debe ser entre 3 a 100 caracteres")],
  put: [(0, _expressValidator.param)("id").isInt().withMessage("id debe ser un numero entero"), (0, _expressValidator.body)("year").not().isEmpty().withMessage("El campo year no debe ser vacio").isLength({
    min: 2,
    max: 2
  }).withMessage("year debe ser de dos digitos").isInt().withMessage("year debe ser un numero entero"), (0, _expressValidator.body)("name").not().isEmpty().withMessage("El campo name no debe ser vacio").isString().withMessage("name debe ser una string").isLength({
    min: 3,
    max: 100
  }).withMessage("name debe ser entre 3 a 100 caracteres"), (0, _expressValidator.body)("lastName").not().isEmpty().withMessage("El campo lastName no debe ser vacio").isString().withMessage("lastName debe ser una string").isLength({
    min: 3,
    max: 100
  }).withMessage("lastName debe ser entre 3 a 100 caracteres")]
};
var _default = valClient;
exports["default"] = _default;