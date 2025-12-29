const express = require("express");
const lista = require("../controle/controleHistorico");

const router = express.Router();

router.get("/historico", lista);

module.exports = router;
