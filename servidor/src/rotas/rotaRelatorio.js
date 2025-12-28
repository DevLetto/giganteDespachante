const express = require('express')
const relatorio = require('../controle/controleRelatorio')

const router = express.Router()

router.get('/relatorio', relatorio)

module.exports = router