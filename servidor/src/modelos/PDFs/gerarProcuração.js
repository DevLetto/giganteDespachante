const PDFDocument = require("pdfkit");
const fs = require("fs");
const db = require("../dataBase/db");

module.exports = function GerarProcuração(dados) {
  const doc = new PDFDocument({
    size: "A4",
    margin: { top: 50, bottom: 45, left: 10, right: 10 },
  });
  doc.pipe(fs.createWriteStream("Procuração.pdf"));


  // Dados fictícios para demonstração
  const Nome = "Roberto Peidor Reiro";
  const Bairro = "Peidolandia";
  const Cidade = "Peido City";
  const CEP = "00000-000";
  const Identidade = "00.000.000-0";
  const OrgaoEmissor = "SSP";
  const CPF = "000.000.000-00";
  const CNPJ = "00.000.000/0000-00";

  const MarcaModelo = "Fiat Uno";
  const AnoFabricacao = "2020";
  const AnoModelo = "2021";
  const Placas = "AAA-0000";
  const Cor = "Prata";
  const Chassi = "9BWZZZ377VT004251";

  // Início do conteúdo do PDF

  // CONF GERAL
  let y = 50;
  const xLabel = 10;
  const espacing = 20;
  const lineHeight = 20;

  // FONTES
  doc.registerFont("Algerian", "fontes/algerian.ttf");
  doc.registerFont("Arial", "fontes/ARIAL.ttf");
  doc.registerFont("Arial-Bold", "fontes/ARIALBD.ttf");
  doc.registerFont("Arial-Italic", "fontes/ARIALI.ttf");
  doc.registerFont("Arial-BoldItalic", "fontes/ARIALNBI.ttf");
  doc.registerFont("Arial-Bolder", "fontes/ARIBLK.ttf");

  // TÍTULO  PDF
  doc
    .font("Algerian")
    .fontSize(30)
    .text("GIGANTE DESPACHANTE EIRELI", { align: "center" });
  doc.moveDown(0.5);

  doc.font("Algerian").text("PROCURAÇÃO", { align: "center" });

  doc.moveDown(1);

  doc
    .font("Arial-Italic")
    .fontSize(9)
    .text(
      `         Pelo presente instrumento de procuração o (a) Outorgante: ${Nome}`,
      { align: "justify" }
    );

  // Dados do Outorgante
  doc.moveDown(1);
  doc.fontSize(9.5);

  doc.font("Arial-Italic").text("Residente á", { align: "justify" });
  doc.moveDown(0.1);
  doc.text(`Bairro: ${dadosCliente.bairro} Cidade: ${dadosCliente.cidade} CEP: ${dadosCliente.cep}`, {
    align: "justify",
  });

  doc.moveDown(0.1);
  doc.text(
    `Portador da carteira de identidade: ${dadosCliente.identidade} ORGÃO EMISSOR: ${dadosCliente.orgaoEmissor}`,
    { align: "justify" }
  );
  doc.moveDown(0.1);
  doc.text(`CPF: ${dadosCliente.cpf}, ou CNPJ: ${dadosCliente.cnpj}`, { align: "justify" });
  //Texto 1
  doc.moveDown(2);

  doc.text(
    "Nomeia (am) e constitui (em) seu bastante procurador o Escritorio ",
    { continued: true }
  );
  doc.font("Algerian").text("GIGANTE DESPACHANTE EIRELI ", { continued: true });
  doc.font("Arial-Italic").text("com sede à ", { continued: true });
  doc
    .font("Arial-Bold")
    .text(
      "RUA FRANCISCO DE OLIVEIRA LOPES QD 229 LT32 Nº141 – CIDADE JARDIM 74423-040 GOIANIA GO, ",
      { continued: true }
    );
  doc
    .font("Arial-Italic")
    .text(
      "como se presente fosse representá-lo(a)junto aos seguintes órgãos: ",
      { continued: true }
    );
  doc
    .font("Arial-Bold")
    .text(
      "DETRAN-GO,JARI,DEFRVA-GO,DNIT,AGETOP,SMT,CIRETRANS,BATALHÃO RODOVIARIO DA POLICIA MILITAR GO,POLICIA MILITAR GO,PRF,SEFAZ, ",
      { continued: true }
    );
  doc
    .font("Arial-Italic")
    .text("para a solicitação dos serviços de:", { align: "justify" });

  // Dados do Veículo
  doc.moveDown(1);
  doc
    .font("Arial-BoldItalic")
    .fontSize(13)
    .text(`Marca/Modelo: ${dadosCliente.modelo} , Placa: ${dadosCliente.placa} , Chassi: ${dadosCliente.chassi} .`,);
  doc.moveDown(0.1);

  doc
    .font("Arial-Italic")
    .fontSize(9.5)
    .text(
      `Ano de fabricação: ${dadosCliente.anoFabricacao}, Ano modelo : ${dadosCliente.anoModelo}, PLACAS: ${dadosCliente.placas}, Cor: ${dadosCliente.cor}, Chassi: ${dadosCliente.chassi}, podendo para tanto assinar o de acordo como adquirente do constante do ATPV, receber e entregar CNH apreendida na comissão de apreensão e pontuação deste órgão. Podendo ainda, requerer e assinar o que for necessário for fazer pagamentos, receber e dar quitações, alegar, concordar, discordar, presta, declarações, e informações, desistir, enfim, dado por firme e valioso.`,
      { align: "justify" }
    );

  //Texto 2
  doc.moveDown(2);

  doc
    .font("Arial-BoldItalic")
    .fontSize(10)
    .text("TERMO DE RESPONSABILIDADE", { align: "center" });

  doc.moveDown(0.1);

  doc
    .font("Arial-Italic")
    .fontSize(9.5)
    .text(
      "Conforme qualificação acima descrita e comprovante de endereço (domicilio ou residência) em anexo, responsabilizo-me sob as penas da lei, penal e civilmente confirmação do citado endereço, a qual representa a expressão no artigo 299, do Código penal (falsificação ideológica) e artigo 242, do Código de Transito Brasileiro, (infração gravíssima, multa no valor de 191,00 e 07 pontos na CNH, permissão para dirigir do declarante.",
      { align: "justify" }
    );

  doc.moveDown(2);

  doc.text("Por ser verdade, firmo o presente documento");

  // Assinatura

  doc.moveDown(2);

  doc.text("Goiânia 06 DE NOVEMBRO DE 2025                               ", {
    align: "right",
  });

  doc.moveDown(3);
  doc.text("__________________________________________", { align: "center" });
  doc.text(
    "               (assinatura do outorgante/declarante)              ",
    { align: "center" }
  );

  doc.moveDown(2);
  doc.text(
    "Reconhecer firma (autêntica, verdadeira, aposta em minha presença, semelhança ou analogia)"
  );
  doc.moveDown(0.1);
  doc.text("Vedado o reconhecimento de firma por abono.");

  doc.moveTo(375, 635).lineTo(550, 635).stroke();
  doc.moveTo(375, 635).lineTo(375, 800).stroke();
  doc.moveTo(550, 635).lineTo(550, 800).stroke();
  doc.moveTo(375, 800).lineTo(550, 800).stroke();

  doc.font("Arial-Bolder").fontSize(11).text("GIGANTE DESPACHANTE", 385, 640);
  doc.font("Arial-Bolder").fontSize(11).text("EIRELI", 445, 655);
  doc.font("Arial-Bold").fontSize(10).text("COD: 2857", 440, 675);

  doc
    .font("Arial-BoldItalic")
    .fontSize(9.5)
    .text("Declaro sob as penas da lei que a", 380, 690);
  doc
    .font("Arial-BoldItalic")
    .fontSize(9.5)
    .text("assinatura na procuração é de próprio", 380, 702);
  doc
    .font("Arial-BoldItalic")
    .fontSize(9.5)
    .text("punho do outorgante, feita em nossa", 380, 712);
  doc
    .font("Arial-BoldItalic")
    .fontSize(9.5)
    .text("presença, assumimos a responsabilidade", 380, 722);
  doc
    .font("Arial-BoldItalic")
    .fontSize(9.5)
    .text("civil e criminal.", 380, 732);

  doc.moveTo(380, 780).lineTo(545, 780).stroke();
  doc
    .font("Arial-BoldItalic")
    .fontSize(9.5)
    .text("GRAZIELE DE SOUZA FERREIRA", 400, 782);

  doc.end();
};
