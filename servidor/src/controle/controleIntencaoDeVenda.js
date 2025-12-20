const gerarIntencaoDeVenda = require("../modelos/PDFs/gerarIntencaoDeVenda");
const { buscarClientePorId } = require("../modelos/clientesModel");

function normalizarNome(nome) {
  return nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

module.exports = async function controleIntencaoDeVenda(req, res) {
  try {
    const { id } = req.params;

    const cliente = await buscarClientePorId(id);

    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    const nomeNormalizado = normalizarNome(cliente.nome);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="intencao-venda-${nomeNormalizado}.pdf"`
    );

    const doc = gerarIntencaoDeVenda(cliente);
    doc.pipe(res);
  } catch (error) {
    res.status(500).json({ error: "erro interno ao gerar pdf" });
  }
};
