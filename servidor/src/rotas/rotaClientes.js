const express = require("express");
const controleClientes = require("../controle/controleHistoricoClientes");

const router = express.Router();

router.get("/clientes", controleClientes);

module.exports = router;
