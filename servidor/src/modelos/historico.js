const db = require("../dataBase/db");

module.exports = async function listaCadastros(filtros = {}) {
  let sql = "SELECT * FROM clients";
  const params = [];
  const where = [];

  if (filtros.id !== undefined) {
    where.push("id = ?");
    params.push(filtros.id);
  }

  if (filtros.placa) {
    where.push("placa LIKE ?");
    params.push(`%${filtros.placa}%`);
  }

  if (filtros.servico) {
    where.push("servico = ?");
    params.push(filtros.servico);
  }

  if (filtros.dataInicial) {
    where.push("DATE(data_emissao) >= ?");
    params.push(filtros.dataInicial);
  }

  if (filtros.dataFinal) {
    where.push("DATE(data_emissao) <= ?");
    params.push(filtros.dataFinal);
  }

  if (where.length > 0) {
    sql += " WHERE " + where.join(" AND ");
  }

  sql += " ORDER BY data_emissao DESC";

  try {
    const [listaCrua] = await db.execute(sql, params);

    const listaFormatada = listaCrua.map((item) => {
      const dt = new Date(item.data_emissao);

      const dataBR = dt.toLocaleDateString("pt-BR");
      const horaBR = dt.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      return {
        ...item,
        data: dataBR,
        hora: horaBR,
      };
    });

    return listaFormatada;
  } catch (error) {
    console.error("Erro ao listar cadastros:", error.message);
    throw error;
  }
};