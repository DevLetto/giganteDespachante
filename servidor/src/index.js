const express = require("express");
const app = express();
// const bcrypt = require("bcrypt");
// const fs = require("fs");
const cors = require("cors");
const port = 8080;
const db = require("./dataBase/db");
const rotaLogin = require('./rotas/rotaLogin')
const createUser = require('./modelos/criarUsuario')

// createUser("jose", "123")

app.use(express.json());
app.use(cors());

// db.prepare(
//   `INSERT INTO clients(nome, cpf_cnpj, telefone, servico, valor_servico, placa, modelo, ano, chassi, cor, data_emissao ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
// ).run(
//   "Gabriel",
//   "123.123.123.123",
//   "1234567890",
//   "transferencia",
//   "190.00",
//   "ONH_AHA",
//   "impala",
//   1967,
//   "asdasdasdasd",
//   "preto",
//   "09/10?2006"
// );





try {
  const clientes = db.prepare("SELECT * FROM clients").all();
  console.log(clientes);
  const usarios = db.prepare("SELECT * FROM users").all();
  console.log(usarios);
} catch (err) {
  console.log("error", err);
}



app.use('/', rotaLogin)

app.listen(port, () => console.log(`rodando na port ${port}`));
