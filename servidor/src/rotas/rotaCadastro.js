const express = require("express");
const cadastro = require("../controle/controleCadastro");

const router = express.Router();

router.post("/cadastro", cadastro);

module.exports = router;
