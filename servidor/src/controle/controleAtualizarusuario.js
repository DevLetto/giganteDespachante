const db = require("../dataBase/db");
const bcrypt = require("bcrypt");

module.exports = async function atualizarUsuario(req, res) {
  try {
    const { usuario, senha } = req.body;
    const userId = req.user.id;

    let senhaHash = null;

    // Só altera a senha se o usuário digitou uma nova
    if (senha && senha.trim() !== "") {
      senhaHash = await bcrypt.hash(senha, 10);
    }

    if (senhaHash) {
      db.prepare(
        `
        UPDATE users
        SET usuario = ?, senha = ?
        WHERE id = ?
      `
      ).run(usuario, senhaHash, userId);
    } else {
      db.prepare(
        `
        UPDATE users
        SET usuario = ?
        WHERE id = ?
      `
      ).run(usuario, userId);
    }

    res.json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};
