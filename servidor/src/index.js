require('dotenv').config();
const db = require("./dataBase/db.js");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
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

// createUser("User3", "1234")



app.use(express.json());
app.use(cors());



async function testarConexao() {
  try {
    // Testando se consegue ler a tabela de clientes
    const [allclientes] = await db.execute("SELECT * FROM clients LIMIT 1");
    console.log("✅ Conexão com MariaDB estabelecida com sucesso!");
    console.log("Exemplo de cliente:", allclientes[0] || "Nenhum cliente cadastrado ainda.");

    const [usuarios] = await db.execute("SELECT * FROM users LIMIT 1");
    console.log("Exemplo de usuário:", usuarios[0] || "Nenhum usuário cadastrado.");
  } catch (err) {
    console.error("❌ Erro ao conectar no MariaDB (Verifique se o HD externo está ligado):", err.message);
  }
}

testarConexao();





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
