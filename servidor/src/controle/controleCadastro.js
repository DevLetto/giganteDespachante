const cadastrarCliente = require("../modelos/cadastrarCliente");

module.exports = async function cadastro(req, res) {
  const usuario_id = req.user.id;
  const usuario_cadastro = req.user.usuario

  const {
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
    ano_fabricacao,
    chassi,
    cor,
    observacao,
    ano_modelo
  } = req.body;

  try {

    console.log("USUÁRIO LOGADO:", req.user);
    await cadastrarCliente(
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
      ano_fabricacao,
      chassi,
      cor,
      observacao,
      usuario_id,
      usuario_cadastro,
      ano_modelo
    );
    res.status(201).json({ message: "Cadastro Realizado!" });
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor Cadastro" });
  }
};
