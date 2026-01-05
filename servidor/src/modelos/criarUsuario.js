const bcrypt = require("bcrypt");
const db = require("../dataBase/db");

module.exports = async function createUser(usuario, senha) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senha, salt);

    const [result] = await db.execute(
      `INSERT INTO users(usuario, senha) VALUES(?, ?)`, 
      [usuario, hash]
    );

    console.log(`Usuário ${usuario} criado com sucesso! ID: ${result.insertId}`);
    return result;
  } catch (error) {
    console.error("Erro ao criar usuário no MariaDB:", error.message);
    throw error;
  }
};