const listaCadastros = require ('../modelos/historico')

module.exports = async function lista(req,res){
    try{

        const filtros = req.query
        const dados = await listaCadastros(filtros)
        res.status(200).json(dados)
    }catch(error){
        res.status(500).json({error:"Erro no servidor"})
    }
}

