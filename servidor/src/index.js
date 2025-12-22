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
// const createUser = require('./modelos/criarUsuario')

// createUser("Brenda", "castidade10")

app.use(express.json());
app.use(cors());





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

app.listen(port, () => console.log(`rodando na port ${port}`));
