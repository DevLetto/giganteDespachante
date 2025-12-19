const Database = require('better-sqlite3')
const db = new Database('../bancoDeDados/dbs.sqlite');

const dados = `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS clients(
    
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        nomeVendedor TEXT NOT NULL,
        cpf_cnpjVendedor TEXT NOT NULL,
        emailVendedor TEXT NOT NULL,
        enderecoVendedor TEXT NOT NULL,
        
        nome TEXT NOT NULL,
        cpf_cnpj TEXT NOT NULL,
        telefone TEXT NOT NULL,
        servico TEXT NOT NULL,
        valor_servico TEXT NOT NULL,
        placa TEXT NOT NULL,
        modelo TEXT NOT NULL,
        ano INTEGER NOT NULL,
        chassi TEXT NOT NULL,
        cor TEXT NOT NULL,

        data_emissao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_cliente_servico ON clients(servico);

    CREATE INDEX IF NOT EXISTS idx_client_placa ON clients(placa);

    CREATE INDEX IF NOT EXISTS idx_client_data ON clients(data_emissao);
    
    
`;

try{
    db.exec(dados)
    console.log("Tabela Criada!")
}catch(err){
    console.log("error", err)
}



module.exports = db;



