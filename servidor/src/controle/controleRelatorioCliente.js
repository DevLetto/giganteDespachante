const gerarRelatorioCliente = require("../modelos/PDFs/gerarRelatorioCliente");

module.exports = async function controleRelatorioCliente(req, res) {
  try {
    const { id } = req.params;

    const doc = gerarRelatorioCliente(id);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="relatorio_cliente_${id}.pdf"`
    );

    doc.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao gerar relatório do cliente" });
  }
};
