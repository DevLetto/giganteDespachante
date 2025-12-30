const cadastrarCliente = require("../modelos/cadastrarCliente");

module.exports = async function cadastro(req, res) {
  const usuario_id = req.userId;
  const usuario_Cadastro = req.body.usuarioCadastro;

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
    ano,
    chassi,
    cor,
    observacao,
  } = req.body;

  try {
    cadastrarCliente(
      usuario_id,
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
      usuario_Cadastro
    );
    res.status(201).json({ message: "Cadastro Realizado!" });
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor Cadastro" });
  }
};
