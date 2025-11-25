const express = require("express")
const login = require("../controle/controleUsuarios")

const router = express.Router()

router.post('/login', login)

module.exports = router