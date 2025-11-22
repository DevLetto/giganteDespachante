const express = require('express')
const app = express()
// const bcrypt = require('bcrypt')
const fs = require('fs')
const cors = require('cors')
const port = 8080;

app.use(express.json())
app.use(cors())

app.post('/login', (req, res) =>{
    const {user, senha} = req.body

    const usersData = fs.readFileSync('./data/users.json', 'utf8')
    const users = JSON.parse(usersData)

    const usuar = users.find(
        (u) => u.user === user && u.senha === senha
    )

    if(!usuar){
        return res.status(401).json({message:"usuario ou senha incoreta"})
    }
    
    res.status(200).json({
        message: "dados recebidos",
        dadosRecebidos: {user, senha}
    })

})




app.listen(port, ()=> console.log(`rodando na port ${port}`))

