const searchUser = require('../modelos/modeloUsuario')
const bcrypt = require("bcrypt");

module.exports = async function login(req, res) {
  const { usuario, senha } = req.body;

  const user = await searchUser(usuario);

  if (!user) {
    return res.status(401).json({ error: "Usuário não encontrado" });
  }

  const match = await bcrypt.compare(senha, user.senha);

  if (!match) {
    return res.status(401).json({ error: "Senha incorreta" });
  }

  // ⚠️ depois vira JWT
  res.json({
    id: user.id,
    usuario: user.usuario
  });
};
