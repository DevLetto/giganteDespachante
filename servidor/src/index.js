const express = require("express");
const app = express();
// const bcrypt = require("bcrypt");
// const fs = require("fs");
const cors = require("cors");
const port = 8080;
const db = require("./dataBase/db");
const rotaLogin = require('./rotas/rotaLogin')
const rotaCadastro = require('./rotas/rotaCliente');
const rotaHistorico = require('./rotas/rotaHistorico')
const procuracao = require('./rotas/rotaProcuracao')
const intencaoDeVenda = require('./rotas/rotaIntecaoDeVenda')
const relatorio = require('./rotas/rotaRelatorio')
// const createUser = require('./modelos/criarUsuario')

// createUser("User", "1234")

app.use(express.json());
app.use(cors());


// const stmt = db.prepare(`
//   INSERT INTO clients (
//     nomeVendedor,
//     estadoCivilVendedor,
//     rgVendedor,
//     orgaoexpedidorVendedor,
//     cpf_cnpjVendedor,
//     emailVendedor,
//     celularVendedor,
//     cidadeVendedor,
//     rua_avVendedor,
//     quadraVendedor,
//     loteVendedor,
//     numero_enderecoVendedor,
//     bairroVendedor,
//     municipioVendedor,
//     ufVendedor,
//     cepVendedor,

//     nome,
//     cpf_cnpj,
//     rg,
//     telefone,
//     endereco,
//     email,

//     servico,
//     valor_servico,

//     placa,
//     modelo,
//     ano,
//     chassi,
//     cor,

//     observacao,
//     data_emissao
//   )
//   VALUES (
//     ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
//     ?,?,?,?,?,?,
//     ?,?,
//     ?,?,?,?,?,?,
//     ?
//   )
// `);

// stmt.run(
//   // ===== VENDEDOR =====
//   "João da Silva",
//   "Solteiro",
//   "1234567",
//   "SSP-GO",
//   "123.456.789-00",
//   "joao@teste.com",
//   "62999999999",
//   "Goiânia",
//   "Rua A",
//   "10",
//   "20",
//   "100",
//   "Centro",
//   "Goiânia",
//   "GO",
//   "74000-000",

//   // ===== CLIENTE =====
//   "Maria Oliveira",
//   "987.654.321-00",
//   "7654321",
//   "62988888888",
//   "Rua B, nº 200",
//   "maria@teste.com",

//   // ===== SERVIÇO =====
//   "Transferência",
//   250.00,

//   // ===== VEÍCULO =====
//   "ABC1D23",
//   "Gol",
//   2015,
//   "9BWZZZ377VT004251",
//   "Branco",

//   // ===== OBS =====
//   "Registro de teste para relatório",
  
//   // ===== DATA =====
//   "2025-09-15"
// );

// stmt.run(
//   "Carlos Pereira",
//   "Casado",
//   "9988776",
//   "SSP-GO",
//   "321.654.987-00",
//   "carlos@teste.com",
//   "62977777777",
//   "Aparecida de Goiânia",
//   "Av Brasil",
//   "05",
//   "12",
//   "50",
//   "Jardim América",
//   "Aparecida de Goiânia",
//   "GO",
//   "74900-000",

//   "Ana Souza",
//   "111.222.333-44",
//   "5544332",
//   "62966666666",
//   "Rua C, nº 300",
//   "ana@teste.com",

//   "Licenciamento",
//   180.00,

//   "DEF4G56",
//   "Onix",
//   2019,
//   "9BWZZZ377VT009999",
//   "Prata",

//   "Teste outubro",
//   "2024-10-10"
// );



try {
  const clientes = db.prepare("SELECT * FROM clients").all();
  console.log(clientes);
  const usarios = db.prepare("SELECT * FROM users").all();
  console.log(usarios);
} catch (err) {
  console.log("error", err);
}


app.use('/', rotaCadastro)
app.use('/', rotaLogin)
app.use('/', rotaHistorico)
app.use('/', procuracao)
app.use('/', intencaoDeVenda )
app.use('/', relatorio);

app.listen(port, () => console.log(`rodando na port ${port}`));
