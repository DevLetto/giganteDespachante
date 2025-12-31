import ServicoData from "../../data/Servicos.json";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import SureConfirmation from "../../components/SureConfirmation";
import { ArrowLeft, Bold } from "lucide-react";
import {
  formatarCpfCnpj,
  formatarTelefone,
  formatarPlaca,
  formatarAno,
  formatarChassi,
  formatarRG,
} from "../../utils/mascara";

function CadastroCliente({
  nome,
  setNome,
  cpf_cnpj,
  setCpf,
  rg,
  setRg,
  telefone,
  setTelefone,
  endereco,
  setEndereco,
  email,
  setEmail,
  servico,
  setServi,
  valor_servico,
  setValorServ,
  placa,
  setPlaca,
  modelo,
  setModelo,
  ano_fabricacao,
  setAno_fabricacao,
  ano_modelo,
  setAno_modelo,
  chassi,
  setChassi,
  cor,
  setCor,
  observacao,
  setObservacao,
  handleSubmit,
  onPrev,
}) {
  const navigate = useNavigate();
  const servicos = ServicoData;

  const handleServicoChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nomeServico = e.target.value;
    setServi(nomeServico);

    const precoServico = selectedOption.dataset.price;
    setValorServ(precoServico);
  };

  const [showConfirm, setShowConfirm] = useState(false);

  const algumCampoPreenchido =
    nome ||
    cpf_cnpj ||
    rg ||
    telefone ||
    email ||
    servico ||
    placa ||
    modelo ||
    ano_fabricacao ||
    ano_modelo ||
    chassi ||
    cor;

  const handleBack = () => {
    if (algumCampoPreenchido) {
      console.log("cade");
      setShowConfirm(true); // abre a tela de confirmação
    } else {
      navigate("/menu"); // volta normalmente
    }
  };

  return (
    <div className="w-screen h-screen bg-fundo flex  items-center flex-col  ">
      <Header
        navigate={() => setShowConfirm(true)}
        icon={X}
        color={"text-red-500"}
        text={"Cancelar"}
      />

      {showConfirm && (
        <SureConfirmation
          onYes={() => navigate("/menu")}
          onNo={() => setShowConfirm(false)}
        />
      )}
      <div className="w-[70%] h-[80%] justify-between flex flex-col  relative">

        <button
          type="button"
          onClick={onPrev}
          className=" absolute top-[40%] right-[115%] text-traco hover:bg-traco hover:text-white rounded-lg p-1"
        >
          <ArrowLeft
            size={60}
            className="text-traco hover:bg-traco hover:text-white rounded-lg"
          />
          <p className="text-2xl font-bold font-[Arial]">Voltar</p>
        </button>

        <main className="flex  flex-col 2xl:gap-20 gap-10   items-center  w-full ">
          <div className="border-b border-traco text-center w-[40%]">
              <h1 className="text-traco 2xl:text-6xl text-5xl font-[Arial] font-bold">
                Cliente
              </h1>
            </div>
          <div className="flex justify-between gap-12">
            
          {/* PRIMEIRA COLUNA */}
            <section className="border-2 border-traco flex flex-col items-center 2xl:w-100 w-75 2xl:h-[460px] h-[300px] gap-2 2xl:gap-10 p-2">
              <fieldset className="w-[98%]">
                <label
                  htmlFor="Nome"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Nome do Cliente*
                </label>
                <input
                  required
                  type="text"
                  name="Nome"
                  value={nome}
                  autoComplete="off"
                  onChange={(e) => setNome(e.target.value)}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>
              <fieldset className="w-[98%]">
                <label
                  htmlFor="CPF"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  CPF/CNPJ*
                </label>
                <input
                  required
                  type="text"
                  name="CPF"
                  value={cpf_cnpj}
                  maxLength={18}
                  autoComplete="off"
                  onChange={(e) => setCpf(formatarCpfCnpj(e.target.value))}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
                />
              </fieldset>
              {/* rg */}
              <fieldset className="w-[98%]">
                <label
                  htmlFor="RG"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  RG*
                </label>
                <input
                  required
                  type="text"
                  name="RG"
                  value={rg}
                  maxLength={12}
                  autoComplete="off"
                  onChange={(e) => setRg(formatarRG(e.target.value))}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>

              <fieldset className="w-[98%]">
                <label
                  htmlFor="Servi"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Serviço Feito*
                </label>
                <select
                  required
                  name="Servi"
                  value={servico}
                  onChange={handleServicoChange}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                >
                  <option value="" disabled selected>
                    Selecione um serviço
                  </option>
                  {servicos.map((grup, grupoIndex) => (
                    <optgroup key={grupoIndex} label={grup.grupo}>
                      {grup.servicos.map((opc, opcIndex) => (
                        <option
                          key={`${grupoIndex} - ${opcIndex}`}
                          value={opc.nome}
                          data-price={opc.preco}
                        >
                          {" "}
                          {opc.nome}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </fieldset>
            </section>

            {/* SEGUNDA COLUNA */}
            <section className="border-2 border-traco flex flex-col items-center 2xl:w-100 w-75 2xl:h-[460px] h-[300px] gap-2 2xl:gap-10 p-2 self-end">
              {/* telefone */}
              <fieldset className="w-[98%]">
                <label
                  htmlFor="Telef"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Telefone*
                </label>
                <input
                  required
                  type="text"
                  name="Telef"
                  value={telefone}
                  maxLength={13}
                  autoComplete="off"
                  onChange={(e) =>
                    setTelefone(formatarTelefone(e.target.value))
                  }
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>

              <fieldset className="w-[98%]">
                <label
                  htmlFor="email"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  E-Mail*
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>

              <fieldset className="w-[98%]">
                <label
                  htmlFor="endereco"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Endereço*
                </label>
                <input
                  required
                  type="text"
                  name="endereco"
                  value={endereco}
                  autoComplete="off"
                  onChange={(e) => setEndereco(e.target.value)}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>

              <fieldset className="w-[98%]">
                <label
                  htmlFor="observacao"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Observação
                </label>
                <input
                  type="text"
                  name="observacao"
                  value={observacao}
                  autoComplete="off"
                  onChange={(e) => setObservacao(e.target.value)}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>
            </section>

            {/* TERCEIRA COLUNA */}
            <section className="border-2 border-traco flex flex-col items-center 2xl:w-100 w-75 2xl:h-[460px] h-[300px] gap-2 2xl:gap-10 p-2 self-end">
              <fieldset className="w-[98%] flex flex-col">
                <label
                  htmlFor="placa"
                  className="2xl:text-xl text-md text-traco font-bold font-[Arial]"
                >
                  Placa*
                </label>
                <input
                  required
                  type="text"
                  name="placa"
                  value={placa}
                  maxLength={8}
                  autoComplete="off"
                  onChange={(e) => setPlaca(formatarPlaca(e.target.value))}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>
              <fieldset className="w-[98%]">
                <label
                  htmlFor="chassi"
                  className="2xl:text-xl text-md text-traco font-bold font-[Arial]"
                >
                  Chassi*
                </label>
                <input
                  required
                  type="text"
                  name="chassi"
                  value={chassi}
                  autoComplete="off"
                  maxLength={17}
                  onChange={(e) => setChassi(formatarChassi(e.target.value))}
                  className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                />
              </fieldset>


              <fieldset className="w-[98%] flex flex-row justify-between">
                <div className="w-[48%]">
                  <label
                    htmlFor="modelo"
                    className="2xl:text-xl text-md text-traco font-bold font-[Arial]"
                  >
                    Modelo*
                  </label>
                  <input
                    required
                    type="text"
                    name="modelo"
                    value={modelo}
                    autoComplete="off"
                    onChange={(e) => setModelo(e.target.value)}
                    className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                  />
                </div>
                <div className="w-[48%]">
                  <label
                    htmlFor="cor"
                    className="2xl:text-xl text-md text-traco font-bold font-[Arial]"
                  >
                    Cor*
                  </label>
                  <input
                    required
                    type="text"
                    name="cor"
                    value={cor}
                    autoComplete="off"
                    onChange={(e) => setCor(e.target.value)}
                    className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco"
                  />
                </div>
              </fieldset>


              <fieldset className="w-[98%] flex flex-row justify-between">
                <div className="w-[48%]">
                  <label
                    htmlFor="anoFabricacao"
                    className="2xl:text-xl text-md text-traco font-bold font-[Arial]"
                  >
                    Ano Fabrição*
                  </label>
                  <input
                    required
                    type="text"
                    name="anoFabricacao"
                    value={ano_fabricacao}
                    maxLength={4}
                    autoComplete="off"
                    onChange={(e) => setAno_fabricacao(formatarAno(e.target.value))}
                    className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
                <div className="w-[48%]">
                  <label
                    htmlFor="anoModelo"
                    className="2xl:text-xl text-md text-traco font-bold font-[Arial]"
                  >
                    Ano Modelo*
                  </label>
                  <input
                    required
                    type="text"
                    name="anoModelo"
                    value={ano_modelo}
                    maxLength={4}
                    autoComplete="off"
                    onChange={(e) => setAno_modelo(formatarAno(e.target.value))}
                    className="bg-white w-full 2xl:h-12 h-8 rounded-lg p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
                
              </fieldset>
            </section>
          </div>
        </main>
        <input
          type="submit"
          value="Finalizar"
          onSubmit={handleSubmit}
          className="self-center bg-traco  h-12 rounded-lg w-[30%] text-3xl font-bold p-1 text-white hover:bg-white hover:text-traco transition hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

export default CadastroCliente;
