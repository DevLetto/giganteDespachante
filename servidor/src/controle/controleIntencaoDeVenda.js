const gerarIntencaoDeVenda = require("../modelos/PDFs/gerarIntencaoDeVenda");
const { buscarClientePorId } = require("../modelos/clientesModel");

function normalizarNome(nome) {
  return nome
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .toLowerCase()
    .replace(/\s+/g, "-"); 
}

module.exports = function controleIntencaoDeVenda(req, res) {
  const { id } = req.params;

  const cliente = buscarClientePorId(id);

  if (!cliente) {
    return res.status(404).json({ error: "Cliente não encontrado" });
  }

  const nomeNormalizado = normalizarNome(cliente.nome)

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="intencao-venda-${nomeNormalizado}.pdf"`
  );

  const doc = gerarIntencaoDeVenda(cliente);
  doc.pipe(res);
};
