require('dotenv').config();
const express = require("express");
const app = express();
// const bcrypt = require("bcrypt");
// const fs = require("fs");
const cors = require("cors");
const port = 8080;
const db = require("./dataBase/db");
const rotaLogin = require('./rotas/rotaLogin')
const rotaCadastro = require('./rotas/rotaCadastro');
const rotaHistorico = require('./rotas/rotaHistorico')
const procuracao = require('./rotas/rotaProcuracao')
const intencaoDeVenda = require('./rotas/rotaIntecaoDeVenda')
const relatorio = require('./rotas/rotaRelatorio')
const clientes = require("./rotas/rotaClientes.js");
const detalhesClientes = require("./rotas/rotaClienteDetalhado.js")
const relatorioCliente = require("./rotas/rotaRelatorioCliente.js")
const atualizarUsuario = require('./rotas/rotaUsuario.js')
// const createUser = require('./modelos/criarUsuario')

// createUser("Brenda", "castidade10")

app.use(express.json());
app.use(cors());






try {
  const allclientes = db.prepare("SELECT * FROM clients").all();
  console.log(allclientes);
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
app.use("/", clientes);
app.use('/', detalhesClientes)
app.use('/', relatorioCliente)
app.use('/', atualizarUsuario)

app.listen(port, () => console.log(`rodando na port ${port}`));
