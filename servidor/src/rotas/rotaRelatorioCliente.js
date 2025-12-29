const express = require("express");
const controleRelatorioCliente = require("../controle/controleRelatorioCliente");

const router = express.Router();

router.get("/relatorio/cliente/:id", controleRelatorioCliente);

module.exports = router;
