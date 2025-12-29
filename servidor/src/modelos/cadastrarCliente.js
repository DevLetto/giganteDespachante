const db = require('../dataBase/db');

module.exports = function createClient(usuarioId, nomeVendedor, estadoCivilVendedor, rgVendedor, orgaoexpedidorVendedor, cpf_cnpjVendedor, emailVendedor, celularVendedor, cidadeVendedor, rua_avVendedor, quadraVendedor, loteVendedor, numero_enderecoVendedor, bairroVendedor, municipioVendedor, ufVendedor, cepVendedor, nome, cpf_cnpj, rg, telefone, endereco, email, servico, valor_servico, placa, modelo, ano, chassi, cor, observacao ){

    try {
       
        const stmt = db.prepare(
            'INSERT INTO clients(usuarioId,nomeVendedor, estadoCivilVendedor, rgVendedor, orgaoexpedidorVendedor, cpf_cnpjVendedor, emailVendedor, celularVendedor, cidadeVendedor, rua_avVendedor, quadraVendedor, loteVendedor, numero_enderecoVendedor, bairroVendedor, municipioVendedor, ufVendedor, cepVendedor, nome, cpf_cnpj, rg, telefone, endereco, email, servico, valor_servico, placa, modelo, ano, chassi, cor, observacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        );

        stmt.run(usuarioId, nomeVendedor, estadoCivilVendedor, rgVendedor, orgaoexpedidorVendedor, cpf_cnpjVendedor, emailVendedor, celularVendedor,cidadeVendedor, rua_avVendedor, quadraVendedor, loteVendedor, numero_enderecoVendedor, bairroVendedor, municipioVendedor, ufVendedor, cepVendedor, nome, cpf_cnpj, rg, telefone, endereco, email, servico, valor_servico, placa, modelo, ano, chassi, cor, observacao );
        console.log(`Vendedor ${nomeVendedor} e Cliente ${nome} inseridos com sucesso. Observação: ${observacao}`);

    } catch (error) {
        console.error("Erro ao inserir o cadastro no banco de dados:", error);
        throw error;
    }
}