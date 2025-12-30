const atualizarUsuario = require("../controle/controleAtualizarusuario");
const express = require("express");
const auth = require("../middlewares/auth");

const router = express.Router();

router.put("/usuario", auth, atualizarUsuario);

module.exports = router;
