// Packages
import { param, body } from "express-validator";

const valClient = {
  getId: [param("id").isInt().withMessage("id debe ser un numero entero")],
  post: [
    body("year")
      .not()
      .isEmpty()
      .withMessage("El campo year no debe ser vacio")
      .isLength({ min: 2, max: 2 })
      .withMessage("year debe ser de dos digitos")
      .isInt()
      .withMessage("year debe ser un numero entero"),
    body("name")
      .not()
      .isEmpty()
      .withMessage("El campo name no debe ser vacio")
      .isString()
      .withMessage("name debe ser una string")
      .isLength({ min: 3, max: 100 })
      .withMessage("name debe ser entre 3 a 100 caracteres"),
  ],
  put: [
    param("id").isInt().withMessage("id debe ser un numero entero"),
    body("year")
      .not()
      .isEmpty()
      .withMessage("El campo year no debe ser vacio")
      .isLength({ min: 2, max: 2 })
      .withMessage("year debe ser de dos digitos")
      .isInt()
      .withMessage("year debe ser un numero entero"),
    body("name")
      .not()
      .isEmpty()
      .withMessage("El campo name no debe ser vacio")
      .isString()
      .withMessage("name debe ser una string")
      .isLength({ min: 3, max: 100 })
      .withMessage("name debe ser entre 3 a 100 caracteres"),
      body("lastName")
      .not()
      .isEmpty()
      .withMessage("El campo lastName no debe ser vacio")
      .isString()
      .withMessage("lastName debe ser una string")
      .isLength({ min: 3, max: 100 })
      .withMessage("lastName debe ser entre 3 a 100 caracteres"),
  ]
};

export default valClient;
