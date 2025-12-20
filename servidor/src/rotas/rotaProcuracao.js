const express = require('express')
const procuracao = require('../controle/controleProcuracao')

const router = express.Router()

router.get('/procuracao', procuracao)

module.exports = router