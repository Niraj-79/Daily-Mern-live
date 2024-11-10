const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Niraj@2003",
  database: "airbnb",
});

module.exports = pool.promise();
