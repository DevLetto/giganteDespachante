const bcrypt = require("bcrypt");
const db = require("../dataBase/db")


module.exports = function createUser(usuario, senha) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(senha, salt);

  db.prepare(`INSERT INTO users(usuario, senha) VALUES(?, ?)`).run(usuario, hash);
}