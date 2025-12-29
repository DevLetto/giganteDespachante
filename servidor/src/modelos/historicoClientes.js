const db = require("../dataBase/db");

module.exports = async function listarClientes(filtros = {}) {
  let sql = `
    SELECT
      MIN(id) as id,
      nome,
      cpf_cnpj,
      telefone,
      email,
      placa,
      modelo
    FROM clients
  `;

  const params = [];
  const where = [];

  if (filtros.busca) {
    where.push(`
      nome LIKE ?
      OR cpf_cnpj LIKE ?
      OR placa LIKE ?
    `);

    params.push(
      `%${filtros.busca}%`,
      `%${filtros.busca}%`,
      `%${filtros.busca}%`
    );
  }

  if (where.length > 0) {
    sql += " WHERE " + where.join(" AND ");
  }

  sql += " GROUP BY cpf_cnpj ORDER BY nome ASC";

  return db.prepare(sql).all(params);
};
