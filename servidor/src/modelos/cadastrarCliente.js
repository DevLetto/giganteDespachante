const db = require("../dataBase/db");

module.exports = function createClient(
  nomeVendedor,
  estadoCivilVendedor,
  rgVendedor,
  orgaoexpedidorVendedor,
  cpf_cnpjVendedor,
  emailVendedor,
  celularVendedor,
  cidadeVendedor,
  rua_avVendedor,
  quadraVendedor,
  loteVendedor,
  numero_enderecoVendedor,
  bairroVendedor,
  municipioVendedor,
  ufVendedor,
  cepVendedor,
  nome,
  cpf_cnpj,
  rg,
  telefone,
  endereco,
  email,
  servico,
  valor_servico,
  placa,
  modelo,
  ano,
  chassi,
  cor,
  observacao,
  usuario_id,
  usuario_cadastro
) {
  try {
    const stmt = db.prepare(
      "INSERT INTO clients(nomeVendedor, estadoCivilVendedor, rgVendedor, orgaoexpedidorVendedor, cpf_cnpjVendedor, emailVendedor, celularVendedor, cidadeVendedor, rua_avVendedor, quadraVendedor, loteVendedor, numero_enderecoVendedor, bairroVendedor, municipioVendedor, ufVendedor, cepVendedor, nome, cpf_cnpj, rg, telefone, endereco, email, servico, valor_servico, placa, modelo, ano, chassi, cor, observacao, usuario_id, usuario_cadastro ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );

    stmt.run(
      nomeVendedor,
      estadoCivilVendedor,
      rgVendedor,
      orgaoexpedidorVendedor,
      cpf_cnpjVendedor,
      emailVendedor,
      celularVendedor,
      cidadeVendedor,
      rua_avVendedor,
      quadraVendedor,
      loteVendedor,
      numero_enderecoVendedor,
      bairroVendedor,
      municipioVendedor,
      ufVendedor,
      cepVendedor,
      nome,
      cpf_cnpj,
      rg,
      telefone,
      endereco,
      email,
      servico,
      valor_servico,
      placa,
      modelo,
      ano,
      chassi,
      cor,
      observacao,
      usuario_id,
      usuario_cadastro
    );
    console.log(
      `Vendedor ${nomeVendedor} e Cliente ${nome} inseridos com sucesso. Observação: ${observacao}`
    );
  } catch (error) {
    console.error("Erro ao inserir o cadastro no banco de dados:", error);
    throw error;
  }
};
