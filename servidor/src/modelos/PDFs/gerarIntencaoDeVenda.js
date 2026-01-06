const PDFDocument = require("pdfkit");
const path = require("path");

module.exports = function GerarIntencaoDeVenda(dados) {
  const doc = new PDFDocument({
    size: "A4",
    margin: { top: 50, bottom: 45, left: 30, right: 30 },
  });

  // CONFIG GERAL
  const fontSize = 9;
  const startX = 30;
  const endX = 550;

  let y = 70;
  const rowHeight = 28;

  const row = (n) => y + n * rowHeight;

  // FONTES
  const fontesPath = path.join(__dirname, "fontes");

  doc.registerFont("Arial", path.join(fontesPath, "ARIAL.ttf"));
  doc.registerFont("Arial-Bold", path.join(fontesPath, "ARIALBD.ttf"));
  doc.registerFont("Arial-Bolder", path.join(fontesPath, "ARIBLK.ttf"));
  doc.registerFont("Arial-Bold-Italic", path.join(fontesPath, "ARIALNBI.ttf"));

  // TÍTULOS
  doc
    .font("Arial-Bold")
    .fontSize(fontSize)
    .text("PROCURAÇÃO", { align: "center", underline: true });

  doc.moveDown(0.4);

  doc.text(
    "INTENÇÃO DE VENDA E EMISSÃO ATPV-E OU CANCELAMENTO DE INTENÇÃO DE VENDA",
    { align: "center", underline: true }
  );

  doc.moveDown(1);

  // TEXTO INTRODUTÓRIO
  doc
    .font("Arial")
    .fontSize(fontSize)
    .text(
      "            Pelo presente instrumento de procuração, o PROPRIETÁRIO(a) VENDEDOR(a),"
    );

  // DADOS DO OUTORGANTE
  y = doc.y + 15;

  doc.text("Outorgante:", startX, row(0) - 5, { continued: true });
  doc.text(`      ${dados.nomeVendedor}`);
  doc
    .moveTo(startX + 55, row(0) + 5)
    .lineTo(endX, row(0) + 5)
    .stroke();

  doc.text("Estado Civil:", startX, row(1) - 10, { continued: true });
  doc.text(`      ${dados.estadoCivilVendedor}`);
  doc
    .moveTo(startX + 55, row(1))
    .lineTo(210, row(1))
    .stroke();

  doc.text("RG Nº:", 220, row(1) - 10, { continued: true });
  doc.text(`      ${dados.rgVendedor}`);
  doc.moveTo(250, row(1)).lineTo(360, row(1)).stroke();

  doc.text("Órgão Expedidor:", 370, row(1) - 10, { continued: true });
  doc.text(`      ${dados.orgaoexpedidorVendedor}`);
  doc.moveTo(440, row(1)).lineTo(endX, row(1)).stroke();
  doc.moveDown(2);

  // CPF / ENDEREÇO
  doc.text("CPF/CNPJ:", startX, row(2) + 5, { continued: true });
  doc.text(`      ${dados.cpf_cnpjVendedor}`);
  doc
    .moveTo(startX + 50, row(3) - 10)
    .lineTo(240, row(3) - 10)
    .stroke();

  doc.text("Rua/Av:", 250, row(2) + 5, { continued: true });
  doc.text(`      ${dados.rua_avVendedor}`);
  doc
    .moveTo(300, row(3) - 10)
    .lineTo(endX, row(3) - 10)
    .stroke();

  // QUADRA / LOTE / Nº / BAIRRO
  doc.text("Quadra:", startX, row(3), { continued: true });
  doc.text(`      ${dados.quadraVendedor}`);
  doc
    .moveTo(70, row(4) - 15)
    .lineTo(150, row(4) - 15)
    .stroke();

  doc.text("Lote:", 160, row(3), { continued: true });
  doc.text(`      ${dados.loteVendedor}`);
  doc
    .moveTo(190, row(4) - 15)
    .lineTo(250, row(4) - 15)
    .stroke();

  doc.text("Nº:", 260, row(3), { continued: true });
  doc.text(`      ${dados.numero_enderecoVendedor}`);
  doc
    .moveTo(280, row(4) - 15)
    .lineTo(350, row(4) - 15)
    .stroke();

  doc.text("Bairro:", 360, row(3), { continued: true });
  doc.text(`      ${dados.bairroVendedor}`);
  doc
    .moveTo(390, row(4) - 15)
    .lineTo(endX, row(4) - 15)
    .stroke();

  // MUNICÍPIO / UF / CEP
  doc.text("Município:", startX, row(4), { continued: true });
  doc.text(`      ${dados.municipioVendedor}`);
  doc
    .moveTo(70, row(5) - 15)
    .lineTo(220, row(5) - 15)
    .stroke();

  doc.text("UF:", 230, row(4), { continued: true });
  doc.text(`      ${dados.ufVendedor}`);
  doc
    .moveTo(250, row(5) - 15)
    .lineTo(280, row(5) - 15)
    .stroke();

  doc.text("CEP:", 290, row(4), { continued: true });
  doc.text(`      ${dados.cepVendedor}`);
  doc
    .moveTo(320, row(5) - 15)
    .lineTo(400, row(5) - 15)
    .stroke();

  // CONTATO
  doc.text("E-mail:", startX, row(5) - 5, { continued: true });
  doc.text(`      ${dados.emailVendedor}`);
  doc
    .moveTo(60, row(6) - 20)
    .lineTo(300, row(6) - 20)
    .stroke();

  doc.text("Celular:", 310, row(5) - 5, { continued: true });
  doc.text(`      ${dados.celularVendedor}`);
  doc
    .moveTo(355, row(6) - 20)
    .lineTo(450, row(6) - 20)
    .stroke();

  //Texto 1

  doc.text(
    "nomeia(am) e constitui seu(s) bastante procurador, o Escritório ",
    startX,
    row(6) - 10,
    { continued: true }
  );
  doc
    .font("Arial-Bold")
    .text("GIGANTE DESPACHANTE EIRELI, ", { continued: true });
  doc.font("Arial").text("código 2857, com sede à");
  doc
    .font("Arial-Bold")
    .text(
      "RUA FRANCISCO LOPES DE OLIVEIRA QD229 LT32 Nº141 CIDADE JARDIM GOIANIA GO, ",
      { continued: true }
    );
  doc
    .font("Arial")
    .text("ara como se presente fosse, representá-lo junto ", {
      continued: true,
    });
  doc.font("Arial-Bold").text("DETRAN/GO., ", { continued: true });
  doc
    .font("Arial")
    .text("para solicitação dos serviços de ", { continued: true });
  doc
    .font("Arial-Bold")
    .text(
      "INCLUSAO DE INTENÇÃO DE VENDA e/ou CANCELAMENTO DE INTEÇÃO DE VENDA EMISSÃO DA ATPV-E",
      { continued: true, underline: true }
    );
  doc
    .font("Arial")
    .text(", do veículo abaixo discriminado:", { underline: false });

  //Info Veiculo

  doc.text("Marca Modelo:", startX, row(7) + 10, { continued: true });
  doc.text(`      ${dados.modelo}`);
  doc
    .moveTo(100, row(8) - 8)
    .lineTo(endX, row(8) - 8)
    .stroke();

  doc.text("Ano de Fabricação/Modelo: ", startX, row(8), { continued: true });
  doc.text(`      ${dados.ano_fabricacao}`);
  doc
    .moveTo(150, row(9) - 15)
    .lineTo(endX, row(9) - 15)
    .stroke();

  doc.text("Placa: ", startX, row(9) - 5, { continued: true });
  doc.text(`      ${dados.placa}`);
  doc
    .moveTo(60, row(10) - 20)
    .lineTo(endX, row(10) - 20)
    .stroke();

  doc.text("Chassi: ", startX, row(9) + 15, { continued: true });
  doc.text(`      ${dados.chassi}`);
  doc.moveTo(65, row(10)).lineTo(endX, row(10)).stroke();

  //Texto 2

  doc.text(
    "podendo para tanto, requerer e assinar o que necessário for efetuar pagamentos, receber e dar quitações, alegar, concordar, discordar, prestar declarações e informações, enfim, praticar quaisquer outros atos que se fizerem necessários para o fiel cumprimento deste Mandato, o que desde já fica dado por firme e valioso.",
    startX,
    row(10) + 10,
    { align: "justify" }
  );

  //Dados Comprador

  doc
    .font("Arial-Bold")
    .text("DADOS COMPRADOR", { align: "center", underline: true }, row(12));

  doc
    .font("Arial")
    .text(
      "Declaro ainda que os dados abaixo são a expressão da verdade, tendo sido captados e informados por mim, assumindo a inteira responsabilidade por eles, e isentando o despachante contratado de qualquer infortúnio:",
      startX,
      row(12) + 20,
      { align: "justify", underline: false }
    );

  doc.text("COMPRADOR:", startX, row(14), { continued: true });
  doc.text(`      ${dados.nome}`);
  doc
    .moveTo(100, row(15) - 18)
    .lineTo(endX, row(15) - 18)
    .stroke();

  doc.text("RG (Identidade):", startX, row(15), { continued: true });
  doc.text(`      ${dados.rg}`);
  doc
    .moveTo(100, row(16) - 18)
    .lineTo(290, row(16) - 18)
    .stroke();

  doc.text("CPF/CNPJ:", 300, row(15), { continued: true });
  doc.text(`      ${dados.cpf_cnpj}`);
  doc
    .moveTo(350, row(16) - 18)
    .lineTo(endX, row(16) - 18)
    .stroke();

  doc.text("ENDEREÇO:", startX, row(16), { continued: true });
  doc.text(`      ${dados.endereco}`);
  doc
    .moveTo(90, row(17) - 18)
    .lineTo(endX, row(17) - 18)
    .stroke();

  doc.text("EMAIL:", startX, row(17), { continued: true });
  doc.text(`      ${dados.email}`);
  doc
    .moveTo(60, row(18) - 15)
    .lineTo(350, row(18) - 15)
    .stroke();

  doc.text("VALOR:", 360, row(17), { continued: true });
  doc.font("Arial-Bold-Italic").text("   R$ ", { continued: true });
  doc.text(`      ${dados.valor_servico}`);
  doc
    .moveTo(400, row(18) - 15)
    .lineTo(endX, row(18) - 15)
    .stroke();

  doc
    .font("Arial")
    .text("Por ser verdade, firmo a presente.", startX, row(18), {
      align: "justify",
    });

  //Assinatura

  doc.moveTo(60, row(21)).lineTo(280, row(21)).stroke();
  doc.text("Assinatura do Outorgante (Proprietário Vendedor)", 70, row(21) + 5);

  //Carimbo da firma

  doc
    .moveTo(320, row(19) - 10)
    .lineTo(545, row(19) - 10)
    .stroke(); // superior
  doc
    .moveTo(320, row(19) - 10)
    .lineTo(320, row(23) + 10)
    .stroke(); // esquerda
  doc
    .moveTo(545, row(19) - 10)
    .lineTo(545, row(23) + 10)
    .stroke(); // direita
  doc
    .moveTo(320, row(23) + 10)
    .lineTo(545, row(23) + 10)
    .stroke(); // inferior

  doc
    .font("Arial-Bolder")
    .fontSize(10)
    .text("GIGANTE DESPACHANTE EIRELI", 345, row(19) - 8);
  doc
    .font("Arial")
    .fontSize(9)
    .text("COD: 2857", 410, row(19) + 10);
  doc.text(
    "Declaro sob as penas da lei que a assinatura na",
    325,
    row(19) + 20
  );
  doc.text(
    "procuração é de próprio punho do outorgante, feita",
    325,
    row(19) + 30
  );
  doc.text(
    "em nossa presença, assumimos a responsabilidade",
    325,
    row(19) + 40
  );
  doc.text("civil e criminal.", 325, row(19) + 50);

  doc
    .moveTo(325, row(22) + 15)
    .lineTo(540, row(22) + 15)
    .stroke();
  doc.text("GRAZIELE DE SOUZA FERREIRA", 360, row(22) + 20);

  // FINAL
  doc.end();
  return doc;
};
