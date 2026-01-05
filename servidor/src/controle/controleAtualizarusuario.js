const db = require("../dataBase/db");
const bcrypt = require("bcrypt");

module.exports = async function atualizarUsuario(req, res) {
  try {
    const { usuario, senha } = req.body;
    const userId = req.user.id;

    let senhaHash = null;

    if (senha && senha.trim() !== "") {
      senhaHash = await bcrypt.hash(senha, 10);
    }

    if (senhaHash) {
      await db.execute(
        `
        UPDATE users
        SET usuario = ?, senha = ?
        WHERE id = ?
      `,
        [usuario, senhaHash, userId]
      );
    } else {
      await db.execute(
        `
        UPDATE users
        SET usuario = ?
        WHERE id = ?
      `,
        [usuario, userId]
      );
    }

    res.json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error("Erro ao atualizar usuário no MariaDB:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};