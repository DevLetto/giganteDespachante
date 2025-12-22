const cadastrarCliente = require ('../modelos/cadastrarCliente')

module.exports = async function cadastro(req, res){
    const { nomeVendedor, estadoCivilVendedor, rgVendedor, orgaoexpedidorVendedor, cpf_cnpjVendedor, emailVendedor, celularVendedor,rua_avVendedor, quadraVendedor, loteVendedor, numero_enderecoVendedor, bairroVendedor, municipioVendedor, ufVendedor, cepVendedor,  nome, cpf_cnpj, rg, telefone, endereco, email, servico, valor_servico, placa, modelo, ano, chassi, cor } = req.body

    try{
        cadastrarCliente(nomeVendedor, estadoCivilVendedor, rgVendedor, orgaoexpedidorVendedor, cpf_cnpjVendedor, emailVendedor, celularVendedor,rua_avVendedor, quadraVendedor, loteVendedor, numero_enderecoVendedor, bairroVendedor, municipioVendedor, ufVendedor, cepVendedor,  nome, cpf_cnpj, rg, telefone, endereco, email, servico, valor_servico, placa, modelo, ano, chassi, cor )
        res.status(201).json({message: "Cadastro Realizado!"})
    }catch(error){
        res.status(500).json({error: "Erro no servidor Cadastro"})
    }
}