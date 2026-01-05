// arquivo: modelos/clienteDetalhado.js
const db = require("../dataBase/db");

module.exports = async function buscarClienteDetalhado(idCliente) {
  try {
    // 1. Buscar dados básicos do cliente
    // No MariaDB, usamos [rows] e acessamos o índice [0] para um único registro
    const [rowsCliente] = await db.execute(`SELECT * FROM clients WHERE id = ?`, [idCliente]);
    const cliente = rowsCliente[0];

    if (!cliente) return null;

    // 2. Buscar veículos (DISTINCT para não repetir se o cliente fez vários serviços com o mesmo carro)
    const [veiculos] = await db.execute(`
      SELECT DISTINCT placa, modelo, ano_fabricacao, cor 
      FROM clients 
      WHERE cpf_cnpj = ?
    `, [cliente.cpf_cnpj]);

    // 3. Buscar histórico de serviços
    const [servicos] = await db.execute(`
      SELECT id, servico, valor_servico, placa, data_emissao 
      FROM clients 
      WHERE cpf_cnpj = ?
      ORDER BY data_emissao DESC
    `, [cliente.cpf_cnpj]);

    return {
      cliente,
      veiculos: veiculos || [],
      servicos: servicos || []
    };
  } catch (error) {
    console.error("Erro no Banco de Dados MariaDB:", error.message);
    throw error; 
  }
};