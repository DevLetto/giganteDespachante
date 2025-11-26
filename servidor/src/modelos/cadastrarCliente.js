const db = require('../dataBase/db');

module.exports = function createClient(nome, cpf, telefone, servi, valorServ, placa, modelo, ano, chassi, cor ){

    try {
       
        const stmt = db.prepare(
            'INSERT INTO clients(nome, cpf_cnpj, telefone, servico, valor_servico, placa, modelo, ano, chassi, cor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        );

        stmt.run(nome, cpf, telefone, servi, valorServ, placa, modelo, ano, chassi, cor);
        console.log(`Cliente ${nome} inserido com sucesso.`);

    } catch (error) {
        console.error("Erro ao inserir cliente no banco de dados:", error);
        throw error; 
    }
}