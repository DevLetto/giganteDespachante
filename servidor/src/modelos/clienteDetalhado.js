// arquivo: modelos/clienteDetalhado.js
const db = require("../dataBase/db");

module.exports = function buscarClienteDetalhado(idCliente) {
  try {
    // 1. Verificar se o cliente existe
    const cliente = db.prepare(`SELECT * FROM clients WHERE id = ?`).get(idCliente);

    if (!cliente) return null;

    // 2. Buscar veículos (Use o CPF para pegar todos os registros desse cliente)
    const veiculos = db.prepare(`
      SELECT DISTINCT placa, modelo, ano, cor 
      FROM clients 
      WHERE cpf_cnpj = ?
    `).all(cliente.cpf_cnpj);

    // 3. Buscar serviços
    const servicos = db.prepare(`
      SELECT id, servico, valor_servico, placa, data_emissao 
      FROM clients 
      WHERE cpf_cnpj = ?
      ORDER BY data_emissao DESC
    `).all(cliente.cpf_cnpj);

    return {
      cliente,
      veiculos: veiculos || [],
      servicos: servicos || []
    };
  } catch (error) {
    console.error("Erro no Banco de Dados:", error.message);
    throw error; // Repassa para o controle tratar
  }
};