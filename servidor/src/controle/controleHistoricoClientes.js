const listarClientes = require("../modelos/historicoClientes");

module.exports = async function listar(req, res) {
  try {
    const filtros = req.query;
    const dados = await listarClientes(filtros);
    res.status(200).json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no servidor" });
  }
};
