const PDFDocument = require("pdfkit");
const path = require('path')

const dbPath = path.resolve(__dirname, "../../dataBase/db.js")
const db = require(dbPath)



// ================= GERAR RELATÓRIO =================
module.exports = async function gerarRelatorio() {
  const dados = db.prepare('SELECT * FROM clients').all()

  const doc = new PDFDocument({ size: "A4", margin: 40 });

  let y = 140;
  const alturaLinha = 22;
  const limitePagina = 760;
  let totalValor = 0;
  let contador = 1;

  // 🔹 COLUNAS (IGUAL AO PDF)
  const colunas = [
    { label: "QUANT.", x: 40, width: 35 },
    { label: "DATA", x: 75, width: 55 },
    { label: "PLACA", x: 130, width: 65 },
    { label: "VEÍCULO", x: 195, width: 120 },
    { label: "SERVIÇO", x: 315, width: 120 },
    { label: "VALOR", x: 435, width: 55 },
    { label: "OBS.", x: 490, width: 60 },
  ];

  // ================= FUNÇÕES =================

  function cabecalho() {
    doc.fontSize(14).text("GIGANTE DESPACHANTE", { align: "left" });
    doc.moveDown(0.3);
    doc.fontSize(10).text("PLANILHA DE SERVIÇOS", { align: "center" });
    doc.moveDown(2);
  }

  function desenharLinha(y, valores, header = false) {
    // linha superior
    doc.moveTo(40, y).lineTo(550, y).stroke();

    colunas.forEach((col, i) => {
      // linha vertical
      doc.moveTo(col.x, y).lineTo(col.x, y + alturaLinha).stroke();

      // texto
      doc
        .font(header ? "Helvetica-Bold" : "Helvetica")
        .fontSize(8.5)
        .text(valores[i] ?? "", col.x + 3, y + 6, {
          width: col.width - 6,
          align: i === 5 ? "right" : "center",
          ellipsis: true,
        });
    });

    // linha direita final
    doc.moveTo(550, y).lineTo(550, y + alturaLinha).stroke();

    // linha inferior
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

  // ================= INÍCIO =================
  cabecalho();
  cabecalhoTabela();

  // ================= DADOS =================
  dados.forEach(item => {
    if (y + alturaLinha > limitePagina) {
      doc.addPage();
      y = 100;
      cabecalhoTabela();
    }

    const valor = Number(item.valor_servico) || 0;
    totalValor += valor;

    desenharLinha(y, [
      contador++,                        // QUANT
      item.placa || "--/--/----",    // DATA
      item.placa || "---",            // PLACA
      item.modelo || "---", // VEÍCULO
      item.servico || "---",              // SERVIÇO
      `R$ ${valor.toFixed(2)}`,          // VALOR
      item.observacao || "",                  // OBS
    ]);

    y += alturaLinha;
  });

  // ================= TOTAL =================
  y += 10;
  desenharLinha(
    y,
    ["", "", "", "TOTAL GERAL", "", `R$ ${totalValor.toFixed(2)}`, ""],
    true
  );

  doc.end();
  console.log("Planilha gerada com sucesso");
  return doc
}
