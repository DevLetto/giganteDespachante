const gerarRelatorio = require("../modelos/PDFs/gerarRelatorio");

module.exports = async function controleRelatorio(req, res) {
  try {
    const doc = await gerarRelatorio();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="relatorio.pdf"`
    );

    doc.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "erro interno ao gerar pdf" });
  }
};
