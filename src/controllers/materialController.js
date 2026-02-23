const Material = require("../models/Material");

exports.listar = async (req, res) => {
  const materiais = await Material.getAll();
  res.json(materiais);
};

exports.criar = async (req, res) => {
  const { nome, quantidade } = req.body;
  await Material.create(nome, quantidade);
  res.json({ message: "Material criado" });
};