const PDFDocument = require("pdfkit");
const db = require("../../dataBase/db");

module.exports = function gerarRelatorioCliente(clienteId) {

  // 🔹 1. Buscar o cliente pelo ID
  const cliente = db.prepare(`
    SELECT nome, cpf_cnpj
    FROM clients
    WHERE id = ?
  `).get(clienteId);

  if (!cliente) {
    throw new Error("Cliente não encontrado");
  }

  // 🔹 2. Buscar TODOS os serviços pelo CPF
  const servicos = db.prepare(`
    SELECT
      data_emissao,
      placa,
      modelo,
      servico,
      valor_servico
    FROM clients
    WHERE cpf_cnpj = ?
    ORDER BY data_emissao ASC
  `).all(cliente.cpf_cnpj);

  const doc = new PDFDocument({ size: "A4", margin: 40 });

  let y = 150;
  const alturaLinha = 22;
  const limitePagina = 760;
  let total = 0;
  let contador = 1;

  // ===== CABEÇALHO =====
  doc.fontSize(14).text("GIGANTE DESPACHANTE");
  doc.moveDown(0.5);

  doc
    .fontSize(12)
    .text(`RELATÓRIO DO CLIENTE: ${cliente.nome}`, { align: "center" });

  doc
    .fontSize(9)
    .text(`CPF/CNPJ: ${cliente.cpf_cnpj}`, { align: "center" });

  doc.moveDown(2);

  // ===== COLUNAS =====
  const colunas = [
    { label: "Nº", x: 40, width: 30 },
    { label: "DATA", x: 70, width: 70 },
    { label: "PLACA", x: 140, width: 70 },
    { label: "VEÍCULO", x: 210, width: 140 },
    { label: "SERVIÇO", x: 350, width: 130 },
    { label: "VALOR", x: 480, width: 70 },
  ];

  function linha(y, valores, header = false) {
    doc.moveTo(40, y).lineTo(550, y).stroke();

    colunas.forEach((c, i) => {
      doc.moveTo(c.x, y).lineTo(c.x, y + alturaLinha).stroke();

      doc
        .font(header ? "Helvetica-Bold" : "Helvetica")
        .fontSize(8.5)
        .text(valores[i] ?? "", c.x + 3, y + 6, {
          width: c.width - 6,
          align: i === 5 ? "right" : "center",
        });
    });

    doc.moveTo(550, y).lineTo(550, y + alturaLinha).stroke();
    doc.moveTo(40, y + alturaLinha).lineTo(550, y + alturaLinha).stroke();
  }

  // Cabeçalho tabela
  linha(y, colunas.map(c => c.label), true);
  y += alturaLinha;

  // ===== DADOS =====
  servicos.forEach(item => {
    if (y + alturaLinha > limitePagina) {
      doc.addPage();
      y = 100;
      linha(y, colunas.map(c => c.label), true);
      y += alturaLinha;
    }

    const valor = Number(item.valor_servico) || 0;
    total += valor;

    const dataBR = new Date(item.data_emissao + "Z")
      .toLocaleDateString("pt-BR");

    linha(y, [
      contador++,
      dataBR,
      item.placa,
      item.modelo,
      item.servico,
      `R$ ${valor.toFixed(2)}`
    ]);

    y += alturaLinha;
  });

  // ===== TOTAL =====
  y += 10;
  linha(y, ["", "", "", "TOTAL PAGO", "", `R$ ${total.toFixed(2)}`], true);

  doc.end();
  return doc;
};
