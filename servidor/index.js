const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const port = 8081;

app.use(express.json())

const users = []

app.get('/users', (req, res) =>{
    res.json(users)
})

app.post('/users', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.senha, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = {nome: req.body.nome, senha: hashedPassword}
        users.push(user)
        res.status(201).send()    
    }catch{
        res.status(500).send()
    }

    
})

app.listen(port, ()=> console.log(`rodando na port ${port}`))

