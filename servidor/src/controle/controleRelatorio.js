const gerarRelatorio = require("../modelos/PDFs/gerarRelatorio");

module.exports = async function controleRelatorio(req, res) {
  try {
    const { meses, ano } = req.query;

    if (!meses || !ano) {
      return res.status(400).json({ error: "Mês e ano obrigatórios" });
    }

    const mesesArray = meses.split(",").map(Number);
    const anoNum = Number(ano);

    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    const mesInvalido = mesesArray.some(m =>
      anoNum > anoAtual || (anoNum === anoAtual && m >= mesAtual)
    );

    if (mesInvalido) {
      return res
        .status(400)
        .json({ error: "Mês atual ou futuro não permitido" });
    }

    const doc = await gerarRelatorio({
      meses: mesesArray,
      ano: anoNum,
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="relatorio-${anoNum}.pdf"`
    );

    doc.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno ao gerar PDF" });
  }
};
