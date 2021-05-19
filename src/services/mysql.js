import mysql from "mysql";
import { makeDb } from "mysql-async-simple";
import "regenerator-runtime/runtime";

const db = makeDb();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test"
});

const result = {
  status: 200,
  results: []
};

//connection.connect();

const query = async (method, req) => {
  await db.connect(connection);
  let sql = "", fields = [];
  switch (method) {
    case "GETALL":
      sql = "SELECT nombre, apellido, edad FROM clientes";
      break;
    case "GETID":
      sql = `SELECT nombre, apellido, edad FROM clientes WHERE id = ${req.params.id}`;
      break;
  }
  try {
    result.results = await db.query(connection, sql);
  } catch (e) {
    // handle exception
    result.results = e
  } finally {
    await db.close(connection);
  }
  return result;
};

export default query;
