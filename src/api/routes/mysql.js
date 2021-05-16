var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test"
});

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

  app.get("/clients/:id", function(req, res) {
    const sql = `SELECT nombre, apellido, edad FROM clientes WHERE id = ${req.params.id}`;
    connection.query(sql, function(error, results) {
      if (error) throw error;
      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ result: "Not result" });
      }
    });
  });
  app.post("/clients/new", function(req, res) {
    const sql = `INSERT INTO clientes SET ?`;
    const customerObj = {
      nombre: req.body.name,
      apellido: req.body.lastName,
      edad: req.body.year
    };
    connection.query(sql, customerObj, error => {
      if (error) res.status(400).json({ result: error });
      res.status(200).json({ result: "Client created!" });
    });
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
