const cadastrarCliente = require("../modelos/cadastrarCliente");

module.exports = async function cadastro(req, res) {
  try {
    const usuario_id = req.user?.id;
    const usuario_Cadastro = req.user?.usuario;

    if (!usuario_id || !usuario_Cadastro) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

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
      email,
      servico,
      valor_servico,

      placa,
      modelo,
      ano_fabricacao,
      chassi,
      cor,
      observacao,
      ano_modelo,
      rua,
      bairro,
      cidade,
      cep,
    } = req.body;

    if (!nome || !cpf_cnpj || !placa || !servico) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes" });
    }

    console.log("📥 Dados recebidos:", req.body);

    console.log("REQ.USER:", req.user);
    console.log("EMAIL CLIENTE:", email);
    console.log("EMAIL VENDEDOR:", emailVendedor);

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
      email,
      servico,
      Number(valor_servico),

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
    );

    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    console.error("Erro no Controller Cadastro:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};
