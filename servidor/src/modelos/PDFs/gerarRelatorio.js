const PDFDocument = require("pdfkit");
const path = require("path");
const db = require("../../dataBase/db");

module.exports = async function gerarRelatorio({ meses, ano }) {
  const placeholders = meses.map(() => "?").join(",");

  const dados = db
    .prepare(`
      SELECT *
      FROM clients
      WHERE strftime('%m', data_emissao) IN (${placeholders})
      AND strftime('%Y', data_emissao) = ?
      ORDER BY data_emissao ASC
    `)
    .all(
      ...meses.map(m => String(m).padStart(2, "0")),
      String(ano)
    );

  const doc = new PDFDocument({ size: "A4", margin: 40 });

  let y = 140;
  const alturaLinha = 22;
  const limitePagina = 760;
  let totalValor = 0;
  let contador = 1;

  const colunas = [
    { label: "QUANT.", x: 40, width: 35 },
    { label: "DATA", x: 75, width: 55 },
    { label: "PLACA", x: 130, width: 65 },
    { label: "VEÍCULO", x: 195, width: 120 },
    { label: "SERVIÇO", x: 315, width: 120 },
    { label: "VALOR", x: 435, width: 55 },
    { label: "OBS.", x: 490, width: 60 },
  ];

  function cabecalho() {
    doc.fontSize(14).text("GIGANTE DESPACHANTE", { align: "left" });
    doc.moveDown(0.3);

    doc
      .fontSize(10)
      .text(
        `RELATÓRIO ECOP ENGENHARIA — ${meses
          .map(m => `${m}/${ano}`)
          .join(", ")}`,
        { align: "center" }
      );

    doc.moveDown(2);
  }

  function desenharLinha(y, valores, header = false) {
    doc.moveTo(40, y).lineTo(550, y).stroke();

    colunas.forEach((col, i) => {
      doc.moveTo(col.x, y).lineTo(col.x, y + alturaLinha).stroke();

      doc
        .font(header ? "Helvetica-Bold" : "Helvetica")
        .fontSize(8.5)
        .text(valores[i] ?? "", col.x + 3, y + 6, {
          width: col.width - 6,
          align: i === 5 ? "right" : "center",
          ellipsis: true,
        });
    });

    doc.moveTo(550, y).lineTo(550, y + alturaLinha).stroke();
    doc.moveTo(40, y + alturaLinha).lineTo(550, y + alturaLinha).stroke();
  }

  function cabecalhoTabela() {
    desenharLinha(
      y,
      colunas.map(c => c.label),
      true
    );
    y += alturaLinha;
  }

  cabecalho();
  cabecalhoTabela();

  dados.forEach(item => {
    if (y + alturaLinha > limitePagina) {
      doc.addPage();
      y = 100;
      cabecalhoTabela();
    }

    const valor = Number(item.valor_servico) || 0;
    totalValor += valor;

    desenharLinha(y, [
      contador++,
      item.data_emissao?.slice(0, 10) || "--/--/----",
      item.placa || "---",
      item.modelo || "---",
      item.servico || "---",
      `R$ ${valor.toFixed(2)}`,
      item.observacao || "",
    ]);

    y += alturaLinha;
  });

  y += 10;
  desenharLinha(
    y,
    ["", "", "", "TOTAL A PAGAR", "", `R$ ${totalValor.toFixed(2)}`, ""],
    true
  );

  doc.end();
  return doc;
};
