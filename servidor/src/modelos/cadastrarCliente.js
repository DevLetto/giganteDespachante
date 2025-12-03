const db = require('../dataBase/db');

module.exports = function createClient(nomeVendedor, cpf_cnpjVendedor, emailVendedor, enderecoVendedor,  nome, cpf_cnpj, telefone, servico, valor_servico, placa, modelo, ano, chassi, cor ){

    try {
       
        const stmt = db.prepare(
            'INSERT INTO clients(nomeVendedor, cpf_cnpjVendedor, emailVendedor, enderecoVendedor, nome, cpf_cnpj, telefone, servico, valor_servico, placa, modelo, ano, chassi, cor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        );

        stmt.run( nomeVendedor, cpf_cnpjVendedor, emailVendedor, enderecoVendedor, nome, cpf_cnpj, telefone, servico, valor_servico, placa, modelo, ano, chassi, cor);
        console.log(`Vendedor ${nomeVendedor} e Cliente ${nome} inseridos com sucesso.`);

    } catch (error) {
        console.error("Erro ao inserir o cadastro no banco de dados:", error);
        throw error; 
    }
}