const path = require('path')
const Database = require('better-sqlite3')
const dbPath = path.join(__dirname, '../db.sqlite')
const db = new Database(dbPath)

const dados = `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXIST clients(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cpf_cnpj TEXT NOT NULL,
        telefone TEXT NOT NULL,
        servico TEXT NOT NULL,
        valor_servico TEXT NOT NULL,
        placa TEXT NOT NULL,
        modelo TEXT NOT NULL,
        ano INTEGER NOT NULL,
        chassi TEXT NOT NULL,
        cor TEXT NOT NULL
        data_emissao TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXIST idx_cliente_servico ON clients(servico);

    CREATE INDEX IF NOT EXIST idx_client_-placa ON clients(placa);

    CREATE INDEX IF NOT EXIST idx_client_-data ON clients(data_emissao);
    
    
`;

try{
    db.exec(dados)
    console.log("Taela criada")
}catch(err){
    console.log("error", err)
}


module.export = db;



