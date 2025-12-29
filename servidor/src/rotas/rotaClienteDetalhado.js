const express = require("express");
const controleClienteDetalhado = require("../controle/ControleClienteDetalhado");

const router = express.Router();

router.get("/clientes/:id", controleClienteDetalhado);

module.exports = router;
