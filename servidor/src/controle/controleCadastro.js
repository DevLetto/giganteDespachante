const cadastrarCliente = require ('../modelos/cadastrarCliente')

module.exports = async function cadastro(req, res){
    const { nomeVendedor, cpf_cnpjVendedor, emailVendedor, enderecoVendedor, nome, cpf_cnpj, telefone, servico, valor_servico, placa, modelo, ano, chassi, cor} = req.body

    try{
        cadastrarCliente(nomeVendedor, cpf_cnpjVendedor, emailVendedor, enderecoVendedor, nome, cpf_cnpj, telefone, servico, valor_servico, placa, modelo, ano, chassi, cor)
        res.status(201).json({message: "Cadastro Realizado!"})
    }catch(error){
        res.status(500).json({error: "Erro no servidor"})
    }
}