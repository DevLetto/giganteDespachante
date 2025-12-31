import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CadastroCliente from "./CadastroCliente";
import CadastroVendedor from "./CadastroVendedor";
import { useEffect } from "react";
import CadastroDone from "../../components/CadastroDone";
import { apiFetch } from "../../services/api";

function Cadastrar() {
  const [step, setStep] = useState(1);
  const [cadasDone, setCadasDone] = useState(false);
  const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

  const navigate = useNavigate();

  // States do cliente
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServi] = useState("");
  const [valor_servico, setValorServ] = useState("");
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano_fabricacao, setAno_fabricacao] = useState("");
  const [ano_modelo, setAno_modelo] = useState("")
  const [chassi, setChassi] = useState("");
  const [cor, setCor] = useState("");
  const [observacao, setObservacao] = useState("");

  // States do Vendedor
  const [nomeVendedor, setNomeVendedor] = useState("");
  const [estadoCivilVendedor, setEstadoCivilVendedor] = useState("");
  const [rgVendedor, setRgVendedor] = useState("");
  const [orgaoexpedidorVendedor, setOrgaoExpedidorVendedor] = useState("");
  const [cpf_cnpjVendedor, setCpfVendedor] = useState("");
  const [emailVendedor, setEmailVendedor] = useState("");
  const [celularVendedor, setCelularVendedor] = useState("");
  const [cidadeVendedor, setCidadeVendedor] = useState("");
  const [rua_avVendedor, setRuaAvVendedor] = useState("");
  const [quadraVendedor, setQuadraVendedor] = useState("");
  const [loteVendedor, setLoteVendedor] = useState("");
  const [numero_enderecoVendedor, setNumeroEnderecoVendedor] = useState("");
  const [bairroVendedor, setBairroVendedor] = useState("");
  const [municipioVendedor, setMunicipioVendedor] = useState("");
  const [ufVendedor, setUfVendedor] = useState("");
  const [cepVendedor, setCepVendedor] = useState("");

  const isFormValid = Boolean(
    nomeVendedor &&
      estadoCivilVendedor &&
      rgVendedor &&
      orgaoexpedidorVendedor &&
      cpf_cnpjVendedor &&
      emailVendedor &&
      celularVendedor &&
      cidadeVendedor &&
      rua_avVendedor &&
      quadraVendedor &&
      loteVendedor &&
      numero_enderecoVendedor &&
      bairroVendedor &&
      municipioVendedor &&
      ufVendedor &&
      cepVendedor
  );

  // console.log("UsuarioLogado:", usuarioLogado )

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosCadastro = {
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
      usuario_Cadastro: usuarioLogado.usuario,
      ano_modelo
    };

    try {
      const response = await apiFetch("/cadastro", {
        method: "POST",
        body: JSON.stringify(dadosCadastro),
      });

      if (response.ok) {
        console.log("Cadastro realizado");
        console.log("Saindo...");
        setCadasDone(true);

        setTimeout(() => {
          navigate("/menu");
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuarios", error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; // desativa scroll na página

    return () => {
      document.body.style.overflow = "auto"; // volta ao normal ao sair do componente
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-fundo flex  items-center flex-col relative ">
      <form onSubmit={handleSubmit} action="">
        {step === 1 && (
          <CadastroVendedor
            nome={nomeVendedor}
            setNome={setNomeVendedor}
            estadoCivil={estadoCivilVendedor}
            setEstadoCivil={setEstadoCivilVendedor}
            rg={rgVendedor}
            setRg={setRgVendedor}
            orgaoexpedidor={orgaoexpedidorVendedor}
            setOrgaoExpedidor={setOrgaoExpedidorVendedor}
            cpf_cnpj={cpf_cnpjVendedor}
            setCpf={setCpfVendedor}
            email={emailVendedor}
            setEmail={setEmailVendedor}
            celular={celularVendedor}
            setCelular={setCelularVendedor}
            cidade={cidadeVendedor}
            setCidade={setCidadeVendedor}
            rua_av={rua_avVendedor}
            setRuaAv={setRuaAvVendedor}
            quadra={quadraVendedor}
            setQuadra={setQuadraVendedor}
            lote={loteVendedor}
            setLote={setLoteVendedor}
            numero_endereco={numero_enderecoVendedor}
            setNumeroEndereco={setNumeroEnderecoVendedor}
            bairro={bairroVendedor}
            setBairro={setBairroVendedor}
            municipio={municipioVendedor}
            setMunicipio={setMunicipioVendedor}
            uf={ufVendedor}
            setUf={setUfVendedor}
            cep={cepVendedor}
            setCep={setCepVendedor}
            isFormValid={isFormValid}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <CadastroCliente
            nome={nome}
            setNome={setNome}
            cpf_cnpj={cpf_cnpj}
            setCpf={setCpf}
            rg={rg}
            setRg={setRg}
            telefone={telefone}
            setTelefone={setTelefone}
            endereco={endereco}
            setEndereco={setEndereco}
            email={email}
            setEmail={setEmail}
            servico={servico}
            setServi={setServi}
            valor_servico={valor_servico}
            setValorServ={setValorServ}
            placa={placa}
            setPlaca={setPlaca}
            modelo={modelo}
            setModelo={setModelo}
            ano_fabricacao={ano_fabricacao}
            ano_modelo={ano_modelo}
            setAno_fabricacao={setAno_fabricacao}
            setAno_modelo={setAno_modelo}
            chassi={chassi}
            setChassi={setChassi}
            cor={cor}
            setCor={setCor}
            observacao={observacao}
            setObservacao={setObservacao}
            onSubmit={handleSubmit}
            onPrev={() => setStep(1)}
          />
        )}

        {cadasDone && <CadastroDone />}
      </form>
    </div>
  );
}

export default Cadastrar;
