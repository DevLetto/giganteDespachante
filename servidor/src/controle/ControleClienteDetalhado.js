const buscarClienteDetalhado = require("../modelos/clienteDetalhado");

module.exports = async function controleClienteDetalhado(req, res) {
  try {
    const { id } = req.params;
    
    console.log("Buscando detalhes para o ID:", id);

    const dados = await buscarClienteDetalhado(id);

    if (!dados) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    res.status(200).json(dados);
  } catch (error) {
    console.error("ERRO CRÍTICO NO BACKEND:", error); 
    res.status(500).json({ error: "Erro interno no servidor", detalhes: error.message });
  }
};