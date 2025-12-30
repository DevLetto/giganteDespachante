const Database = require('better-sqlite3')
const db = new Database('../bancoDeDados/db.sqlite');

const dados = `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS clients(
    
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER NOT NULL,

        nomeVendedor TEXT NOT NULL,
        estadoCivilVendedor TEXT NOT NULL,
        rgVendedor TEXT NOT NULL,
        orgaoexpedidorVendedor TEXT NOT NULL,
        cpf_cnpjVendedor TEXT NOT NULL,
        emailVendedor TEXT NOT NULL,
        celularVendedor TEXT NOT NULL,
        cidadeVendedor TEXT NOT NULL,
        rua_avVendedor TEXT NOT NULL,
        quadraVendedor TEXT NOT NULL,
        loteVendedor TEXT NOT NULL,
        numero_enderecoVendedor INTEGER NOT NULL,
        bairroVendedor TEXT NOT NULL,
        municipioVendedor TEXT NOT NULL,
        ufVendedor TEXT NOT NULL,
        cepVendedor TEXT NOT NULL,

        
        nome TEXT NOT NULL,
        cpf_cnpj TEXT NOT NULL,
        rg TEXT NOT NULL,
        telefone TEXT NOT NULL,
        endereco TEXT NOT NULL,
        email TEXT NOT NULL,
        servico TEXT NOT NULL,
        valor_servico TEXT NOT NULL,
        placa TEXT NOT NULL,
        modelo TEXT NOT NULL,
        ano INTEGER NOT NULL,
        chassi TEXT NOT NULL,
        cor TEXT NOT NULL,
        observacao TEXT,

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



