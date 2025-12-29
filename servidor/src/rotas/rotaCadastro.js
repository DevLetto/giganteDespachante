const express = require("express");
const cadastro = require("../controle/controleCadastro");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/cadastro", auth, cadastro);

module.exports = router;
