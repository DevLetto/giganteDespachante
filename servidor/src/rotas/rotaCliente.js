const express = require("express")
const cadastro = require('../modelos/cadastrarCliente')

const router = express.Router()

router.post('/cadastro', cadastro)

module.exports = router