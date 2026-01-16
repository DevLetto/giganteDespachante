import ServicoData from "../../data/Servicos.json";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { X, ArrowLeft, ChevronDown } from "lucide-react";
import SureConfirmation from "../../components/SureConfirmation";
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
  // Novos campos de endereço
  rua,
  setRua,
  bairro,
  setBairro,
  cidade,
  setCidade,
  cep,
  setCep,
  email,
  setEmail,
  servico,
  setServi, // Espera um Array []
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
  const servicosData = ServicoData;
  const [showConfirm, setShowConfirm] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controla o dropdown de serviços
  const dropdownRef = useRef(null);

  // Fecha o dropdown ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCheckboxChange = (e) => {
    const { value, checked, dataset } = e.target;
    const preco = parseFloat(dataset.price);

    if (checked) {
      setServi([...servico, value]);
      setValorServ((prev) => (parseFloat(prev || 0) + preco).toFixed(2));
    } else {
      setServi(servico.filter((s) => s !== value));
      setValorServ((prev) => (parseFloat(prev || 0) - preco).toFixed(2));
    }
  };

  const algumCampoPreenchido =
    nome || cpf_cnpj || (servico && servico.length > 0) || placa;

  return (
    <div className="w-screen h-screen bg-fundo flex items-center flex-col overflow-x-hidden">
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

      <div className="w-[85%] h-[85%] justify-between flex flex-col relative mt-2">
        <button
          type="button"
          onClick={onPrev}
          className="absolute top-[40%] right-[105%] text-traco hover:scale-110 transition-transform flex flex-col items-center"
        >
          <ArrowLeft size={50} />
          <p className="text-xl font-bold font-[Arial]">Voltar</p>
        </button>

        <main className="flex flex-col gap-6 items-center w-full ">
          <div className="border-b border-traco text-center w-[40%]">
            <h1 className="text-traco 2xl:text-6xl text-5xl font-[Arial] font-bold">
              Cliente
            </h1>
          </div>

          <div className="flex justify-between gap-6 w-full min-w-0 overflow-hidden ">
            {/* COLUNA 1*/}
            <section className="border-2 border-traco flex flex-col items-center flex-[0_0_33.333%] max-w-[33.333%] min-w-0 overflow-hidden h-[480px] gap-3 p-3 bg-white/30 rounded">
              <fieldset className="w-full">
                <label className="text-xl text-traco font-bold font-[Arial]">
                  Nome do Cliente*
                </label>
                <input
                  required
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>

              <fieldset className="w-full">
                <label className="text-xl text-traco font-bold font-[Arial]">
                  CPF/CNPJ*
                </label>
                <input
                  required
                  type="text"
                  value={cpf_cnpj}
                  maxLength={18}
                  onChange={(e) => setCpf(formatarCpfCnpj(e.target.value))}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>

              <fieldset className="w-full">
                <label className="text-xl text-traco font-bold font-[Arial]">
                  RG*
                </label>
                <input
                  required
                  type="text"
                  value={rg}
                  maxLength={12}
                  onChange={(e) => setRg(formatarRG(e.target.value))}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>

              <fieldset className="w-full">
                <label className="text-xl text-traco font-bold font-[Arial]">
                  Telefone*
                </label>
                <input
                  required
                  type="text"
                  value={telefone}
                  maxLength={13}
                  onChange={(e) =>
                    setTelefone(formatarTelefone(e.target.value))
                  }
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>

              <fieldset className="w-full">
                <label className="text-xl text-traco font-bold font-[Arial]">
                  E-Mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>
            </section>

            {/* COLUNA 2 */}
            <section className="border-2 border-traco flex flex-col items-center flex-[0_0_33.333%] max-w-[33.333%] min-w-0 overflow-hidden h-[480px] gap-3 p-3 bg-white/30 rounded">
              <div className="flex gap-2 w-full">
                <fieldset className="w-full">
                  <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                    Rua*
                  </label>
                  <input
                    required
                    type="text"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                  />
                </fieldset>
              </div>

              <div className="flex gap-2 w-full">
                <fieldset className="w-1/2">
                  <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                    Bairro*
                  </label>
                  <input
                    required
                    type="text"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                  />
                </fieldset>
                <fieldset className="w-1/2">
                  <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                    Cidade*
                  </label>
                  <input
                    required
                    type="text"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                  />
                </fieldset>
              </div>

              <fieldset className="w-full">
                <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                  CEP
                </label>
                <input
                  required
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>

              {/* DROPDOWN CUSTOMIZADO QUE PARECE UM SELECT */}
              <fieldset className="w-full min-w-0 " ref={dropdownRef}>
                <label className="text-xl text-traco font-bold font-[Arial]">
                  Serviços Selecionados*
                </label>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco flex items-center cursor-pointer  border border-gray-300 overflow-hidden"
                >
                  <span className="flex-1 min-w-0 truncate text-xs italic">
                    {servico.length > 0
                      ? servico.join(", ")
                      : "Selecione os serviços..."}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`ml-2 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isOpen && (
                  <div className="absolute w-max mt-1 bg-white border border-traco rounded-lg shadow-2xl max-h-60 overflow-y-auto custom-scroll">
                    {servicosData.map((grupo, gIdx) => (
                      <div key={gIdx}>
                        <div className="bg-gray-200 px-2 py-1 text-[10px] font-bold text-traco uppercase">
                          {grupo.grupo}
                        </div>
                        {grupo.servicos.map((opc, oIdx) => (
                          <label
                            key={oIdx}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-fundo cursor-pointer border-b border-gray-100 last:border-none"
                          >
                            <input
                              type="checkbox"
                              value={opc.nome}
                              data-price={opc.preco}
                              checked={servico.includes(opc.nome)}
                              onChange={handleCheckboxChange}
                              className="w-4 h-4 accent-traco"
                            />
                            <span className="text-xs text-traco">
                              {opc.nome}
                            </span>
                          </label>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-1 text-traco font-bold text-right">
                  Total: R$ {valor_servico || "0.00"}
                </div>
              </fieldset>

              <fieldset className="w-full ">
                <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                  Observação
                </label>
                <textarea
                  value={observacao}
                  onChange={(e) => setObservacao(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg p-2 text-traco border border-gray-300 resize-none"
                />
              </fieldset>
            </section>

            {/* COLUNA 3: VEÍCULO */}
            <section className="border-2 border-traco flex flex-col items-center flex-[0_0_33.333%] max-w-[30.333%] min-w-0 overflow-hidden h-[480px] gap-3 p-3 bg-white/30 rounded">
              <div className="flex gap-2 w-full text-center">
                <fieldset className="w-1/2">
                  <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                    Placa*
                  </label>
                  <input
                    required
                    type="text"
                    value={placa}
                    maxLength={8}
                    onChange={(e) => setPlaca(formatarPlaca(e.target.value))}
                    className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                  />
                </fieldset>
                <fieldset className="w-1/2">
                  <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                    Cor*
                  </label>
                  <input
                    required
                    type="text"
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                    className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                  />
                </fieldset>
              </div>

              <fieldset className="w-full">
                <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                  Modelo*
                </label>
                <input
                  required
                  type="text"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>

              <div className="flex gap-2 w-full">
                <fieldset className="w-1/2">
                  <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                    Ano Fab.*
                  </label>
                  <input
                    required
                    type="text"
                    value={ano_fabricacao}
                    maxLength={4}
                    onChange={(e) =>
                      setAno_fabricacao(formatarAno(e.target.value))
                    }
                    className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                  />
                </fieldset>
                <fieldset className="w-1/2">
                  <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                    Ano Mod.*
                  </label>
                  <input
                    required
                    type="text"
                    value={ano_modelo}
                    maxLength={4}
                    onChange={(e) => setAno_modelo(formatarAno(e.target.value))}
                    className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                  />
                </fieldset>
              </div>

              <fieldset className="w-full">
                <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                  Chassi*
                </label>
                <input
                  required
                  type="text"
                  value={chassi}
                  maxLength={17}
                  onChange={(e) => setChassi(formatarChassi(e.target.value))}
                  className="bg-white w-full h-12 rounded-lg px-2 text-traco border border-gray-300"
                />
              </fieldset>
            </section>
          </div>
        </main>

        <button
          onClick={handleSubmit}
          className="self-center bg-traco h-14 rounded-xl w-[40%] text-3xl font-bold text-white hover:bg-white hover:text-traco border-2 border-traco transition-all shadow-lg active:scale-95 mb-4"
        >
          Finalizar Cadastro
        </button>
      </div>
    </div>
  );
}

export default CadastroCliente;
