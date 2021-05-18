import mysql from "mysql";
import { param, body, validationResult } from "express-validator";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test"
});

const validator = [
  param("id")
    .isInt()
    .withMessage("id debe ser un numero entero")
];

const validatorPost = [
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
    .withMessage("name debe ser entre 3 a 100 caracteres")
];

connection.connect();
const clients = app => {
  app.get("/clients/all", function(req, res) {
    const sql = "SELECT nombre, apellido, edad FROM clientes";
    connection.query(sql, function(error, results) {
      if (error) throw error;
      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ result: "Not result" });
      }
    });
  });

  app.get("/clients/:id", validator, function(req, res) {
    if (!validationResult(req).isEmpty()) {
      res.status(200).json({ result: validationResult(req) });
    } else {
      const sql = `SELECT nombre, apellido, edad FROM clientes WHERE id = ${req.params.id}`;
      connection.query(sql, function(error, results) {
        if (error) throw error;
        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(200).json({ result: "Not result" });
        }
      });
    }
  });
  app.post("/clients/new", validatorPost, function(req, res) {
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
  });

  //connection.end();
};
export default clients;
