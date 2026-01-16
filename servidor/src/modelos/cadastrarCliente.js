const db = require("../dataBase/db");

module.exports = async function createClient(
  // Dados Vendedor
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
  // Dados Cliente
  nome,
  cpf_cnpj,
  rg,
  telefone,
  email,
  servico,
  valor_servico,
  //Dados Veiculo
  placa,
  modelo,
  ano_fabricacao,
  chassi,
  cor,
  //dados adcionais
  observacao,
  usuario_id,
  usuario_cadastro,
  ano_modelo,
  rua,
  bairro,
  cidade,
  cep
) {
  try {
    const sql = `
      INSERT INTO clients (
        nomeVendedor, estadoCivilVendedor, rgVendedor, orgaoexpedidorVendedor, 
        cpf_cnpjVendedor, emailVendedor, celularVendedor, cidadeVendedor, 
        rua_avVendedor, quadraVendedor, loteVendedor, numero_enderecoVendedor, 
        bairroVendedor, municipioVendedor, ufVendedor, cepVendedor, 
        nome, cpf_cnpj, rg, telefone, email, 
        servico, valor_servico, placa, modelo, 
        ano_fabricacao, chassi, cor, observacao, 
        usuario_id, usuario_cadastro, ano_modelo, rua, bairro, cidade, cep
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
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
      email,
      servico,
      valor_servico,
      placa,
      modelo,
      ano_fabricacao,
      chassi,
      cor,
      observacao,
      usuario_id,
      usuario_cadastro,
      ano_modelo,
      rua,
      bairro,
      cidade,
      cep
    ];

    await db.execute(sql, values);

    console.log(`Sucesso: Vendedor ${nomeVendedor} | Cliente ${nome}`);
  } catch (error) {
    console.error("Erro no Model cadastrarCliente:", error);
    throw error;
  }
};
