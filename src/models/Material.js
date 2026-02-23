const db = require("../config/db");

exports.getAll = async () => {
  const result = await db.query("SELECT * FROM materiais");
  return result.rows;
};

exports.create = async (nome, quantidade) => {
  await db.query(
    "INSERT INTO materiais(nome, quantidade) VALUES($1,$2)",
    [nome, quantidade]
  );
};