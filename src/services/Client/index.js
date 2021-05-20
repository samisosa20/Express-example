// Packages
import mysql from "mysql";
import { makeDb } from "mysql-async-simple";
import "regenerator-runtime/runtime";

// Settings
import config from "../../config";

const db = makeDb();

const query = async (method, req) => {
  let sql = "";
  const result = {
    status: 200,
    results: [],
  };

  const customerObj = {
    nombre: "",
    apellido: "",
    edad: 0,
  };

  const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
  });

  try {
    await db.connect(connection);
  } catch (e) {
    result.results = e;
    result.status = 500;
    return result;
  }

  switch (method) {
    case "GETALL":
      sql = "SELECT nombre, apellido, edad FROM clientes";
      break;
    case "GETID":
      sql = `SELECT nombre, apellido, edad FROM clientes WHERE id = ${req.params.id}`;
      break;
    case "POSTNEW":
      sql = `INSERT INTO clientes SET ?`;
      customerObj.nombre = req.body.name;
      customerObj.apellido = req.body.lastName;
      customerObj.edad = req.body.year;
      break;
    case "PUTID":
      sql = `UPDATE clientes SET nombre = '${req.body.name}', apellido = '${req.body.lastName}', edad = ${req.body.year} WHERE id = ${req.params.id}`;
      break;
    case "DELETEID":
      sql = `DELETE FROM clientes WHERE id = ${req.params.id}`;
      break;
  }

  try {
    result.results = await db.query(connection, sql, [customerObj]);
  } catch (e) {
    result.status = 500
    result.results = e;
  } finally {
    await db.close(connection);
  }

  return result;
};

export default query;
