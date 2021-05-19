import mysql from "mysql";
const asyncHandler = require('express-async-handler')


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*p-=jpNN",
  database: "test",
});

connection.connect();

const query = (method, req) => {
  let sql = "";
  switch (method) {
    case "GETALL":
      sql = "SELECT nombre, apellido, edad FROM clientes";
      break;
    case "GETID":
      sql = `SELECT nombre, apellido, edad FROM clientes WHERE id = ${req.params.id}`;
      break;
  }
  const result = {
    status: 200,
    results: [],
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
  console.log(returnQuery)
};

export default query;
