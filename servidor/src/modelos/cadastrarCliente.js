const db = require('../dataBase/db');

module.exports = function createClient(nome, cpf, telefone, servi, placa, modelo, ano, chassi, cor ){

    db.prepare('INSERT INTO clients(nome, cpf_cnpj, telefone, servico, placa, modelo, ano, chassi, cor')
}