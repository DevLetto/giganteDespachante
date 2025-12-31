// arquivo: modelos/clienteDetalhado.js
const db = require("../dataBase/db");

module.exports = function buscarClienteDetalhado(idCliente) {
  try {
    const cliente = db.prepare(`SELECT * FROM clients WHERE id = ?`).get(idCliente);

    if (!cliente) return null;

    const veiculos = db.prepare(`
      SELECT DISTINCT placa, modelo, ano_fabricacao, cor 
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
    throw error; 
  }
};