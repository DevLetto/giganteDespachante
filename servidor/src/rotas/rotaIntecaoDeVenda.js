const express = require('express')
const intencao = require('../controle/controleIntencaoDeVenda')
const router = express.Router()

router.get('/intencaoDeVenda', intencao)

module.exports = router