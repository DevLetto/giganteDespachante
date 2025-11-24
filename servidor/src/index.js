const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const fs = require("fs");
const cors = require("cors");
const port = 8080;
const db = require("./dataBase/db");

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

function createUser(usuario, senha) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(senha, salt);

  const stmt = db.prepare(`INSERT INTO users(usuario, senha) VALUES(?, ?)`);
  stmt.run(usuario, hash);
}



try {
  const clientes = db.prepare("SELECT * FROM clients").all();
  console.log(clientes);
  const usarios = db.prepare("SELECT * FROM users").all();
  console.log(usarios);
} catch (err) {
  console.log("error", err);
}

app.post('/login', async (req, res) =>{
    const {usuario, senha} = req.body;

    const user = db.prepare("SELECT * FROM users WHERE usuario = ?").get(usuario)

    if(!user){
        return res.status(401).json({error: "Usuario não encontrado"})
    }

    const match = await bcrypt.compare(senha, user.senha)

    if(!match){
        return res.status(401).json({error: "Senha Invalida"})
    }

    res.json({message: "Login bem sucedido"})
})

app.listen(port, () => console.log(`rodando na port ${port}`));
