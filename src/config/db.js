const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "620860ik",
  host: "localhost",
  port: 5432,
  database: "almoxarifado"
});

module.exports = pool;