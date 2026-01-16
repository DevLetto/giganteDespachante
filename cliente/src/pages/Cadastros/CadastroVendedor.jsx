import Header from "../../components/Header";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SureConfirmation from "../../components/SureConfirmation";
import {
  formatarCpfCnpj,
  formatarTelefone,
  formatarCEP,
  formatarRG,
  formatarUF,
} from "../../utils/mascara";

function CadastroVendedor({
  nome,
  setNome,
  estadoCivil,
  setEstadoCivil,
  rg,
  setRg,
  orgaoexpedidor,
  setOrgaoExpedidor,
  cpf_cnpj,
  setCpf,
  email,
  setEmail,
  celular,
  setCelular,
  rua_av,
  setRuaAv,
  cidade,
  setCidade,
  quadra,
  setQuadra,
  lote,
  setLote,
  numero_endereco,
  setNumeroEndereco,
  bairro,
  setBairro,
  municipio,
  setMunicipio,
  uf,
  setUf,
  cep,
  setCep,
  isFormValid,
  onNext,
}) {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [tipoPessoa, setTipoPessoa] = useState("PF");

  const algumCampoPreenchido = nome || rg || cpf_cnpj || celular || cep;

  const handleBack = () => {
    if (algumCampoPreenchido) {
      setShowConfirm(true);
    } else {
      navigate("/menu");
    }
  };

  return (
    <div className="w-screen h-screen bg-fundo flex items-center flex-col">
      <Header
        navigate={handleBack}
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

      <main className="flex flex-col justify-between items-center 2xl:w-360 w-260 2xl:gap-14 gap-8">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="border-b border-traco w-[50%] text-center">
            <h1 className="text-traco 2xl:text-6xl text-5xl font-[Arial] font-bold">
              Vendedor
            </h1>
          </div>

          <div className="flex gap-4 mt-4">
            <label className="flex items-center gap-2 text-traco font-bold cursor-pointer">
              <input
                type="radio"
                name="tipo"
                checked={tipoPessoa === "PF"}
                onChange={() => setTipoPessoa("PF")}
                className="accent-traco w-5 h-5"
              />
              Pessoa Física
            </label>
            <label className="flex items-center gap-2 text-traco font-bold cursor-pointer">
              <input
                type="radio"
                name="tipo"
                checked={tipoPessoa === "PJ"}
                onChange={() => setTipoPessoa("PJ")}
                className="accent-traco w-5 h-5"
              />
              Pessoa Jurídica
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {/* Coluna 1 */}
          <section className="border-2 border-traco flex flex-col items-center 2xl:w-100 w-75 2xl:h-[480px] h-[350px] gap-8 p-3 shadow-sm rounded-xl">
            <fieldset className="w-[98%]">
              <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                {tipoPessoa === "PF" ? "Nome Completo*" : "Razão Social*"}
              </label>
              <input
                required
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="bg-white border border-gray-300 w-full 2xl:h-12 h-10 rounded-lg p-2 text-traco shadow-sm"
              />
            </fieldset>

            <fieldset className="w-[98%]">
              <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                {tipoPessoa === "PF" ? "CPF*" : "CNPJ*"}
              </label>
              <input
                required
                type="text"
                value={cpf_cnpj}
                maxLength={tipoPessoa === "PF" ? 14 : 18}
                onChange={(e) => setCpf(formatarCpfCnpj(e.target.value))}
                className="bg-white border border-gray-300 w-full 2xl:h-12 h-10 rounded-lg p-2 text-traco shadow-sm"
              />
            </fieldset>

            {/* RG e Orgão só aparecem para PF */}
            {tipoPessoa === "PF" && (
              <fieldset className="w-[98%] flex gap-5">
                <div className="w-[45%]">
                  <label className="2xl:text-xl text-md text-traco font-bold">
                    RG*
                  </label>
                  <input
                    required
                    type="text"
                    value={rg}
                    maxLength={12}
                    onChange={(e) => setRg(formatarRG(e.target.value))}
                    className="bg-white border border-gray-300 w-full 2xl:h-12 h-10 rounded-lg p-2 text-traco shadow-sm"
                  />
                </div>
                <div className="w-[48%]">
                  <label className="2xl:text-xl text-xs text-traco font-bold">
                    Orgão Expedidor*
                  </label>
                  <input
                    required
                    type="text"
                    value={orgaoexpedidor}
                    onChange={(e) => setOrgaoExpedidor(e.target.value)}
                    className="bg-white border border-gray-300 w-full 2xl:h-12 h-10 rounded-lg p-2 text-traco shadow-sm"
                  />
                </div>
              </fieldset>
            )}
          </section>

          {/* Coluna 2 */}
          <section className="border-2 border-traco flex flex-col items-center 2xl:w-100 w-75 2xl:h-[480px] h-[350px] gap-8 p-3 shadow-sm rounded-xl">
            {/* Estado Civil só aparece para PF */}
            {tipoPessoa === "PF" && (
              <fieldset className="w-[98%]">
                <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                  Estado Civil*
                </label>
                <select
                  required
                  value={estadoCivil}
                  onChange={(e) => setEstadoCivil(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-12 h-10 rounded-lg p-2 text-traco shadow-sm"
                >
                  <option value="" disabled></option>
                  <option value="Solteiro(a)">Solteiro(a)</option>
                  <option value="Casado(a)">Casado(a)</option>
                  <option value="Divorciado(a)">Divorciado(a)</option>
                  <option value="Viúvo(a)">Viúvo(a)</option>
                  <option value="União Estável">União Estável</option>
                </select>
              </fieldset>
            )}

            <fieldset className="w-[98%]">
              <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                Telefone*
              </label>
              <input
                required
                type="text"
                value={celular}
                maxLength={15}
                onChange={(e) => setCelular(formatarTelefone(e.target.value))}
                className="bg-white border border-gray-300 w-full 2xl:h-12 h-10 rounded-lg p-2 text-traco shadow-sm"
              />
            </fieldset>

            <fieldset className="w-[98%]">
              <label className="2xl:text-xl text-md text-traco font-bold font-[Arial]">
                E-mail*
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-gray-300 w-full 2xl:h-12 h-10 rounded-lg p-2 text-traco shadow-sm"
              />
            </fieldset>
          </section>

          {/* Coluna 3 - Endereço (Sempre igual) */}
          <section className="border-2 border-traco flex flex-col items-center 2xl:w-150 w-100 2xl:h-[480px] h-[350px] 2xl:gap-8 gap-5 p-3 shadow-sm rounded-xl">
            <div className="flex gap-3 w-full">
              <fieldset className="w-[45%]">
                <label className="2xl:text-xl text-md text-traco font-bold">CEP*</label>
                <input
                  required
                  type="text"
                  value={cep}
                  maxLength={9}
                  onChange={(e) => setCep(formatarCEP(e.target.value))}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
              <fieldset className="w-[52%]">
                <label className="2xl:text-xl text-md text-traco font-bold">Cidade*</label>
                <input
                  required
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
            </div>

            <div className="flex gap-3 w-full">
              <fieldset className="w-[58%]">
                <label className="2xl:text-xl text-md text-traco font-bold">Rua/Av*</label>
                <input
                  required
                  type="text"
                  value={rua_av}
                  onChange={(e) => setRuaAv(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
              <fieldset className="w-[40%]">
                <label className="2xl:text-xl text-md text-traco font-bold">Bairro*</label>
                <input
                  required
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
            </div>

            <div className="flex gap-3 w-full">
              <fieldset className="w-1/3">
                <label className="2xl:text-xl text-md text-traco font-bold">Quadra*</label>
                <input
                  type="text"
                  value={quadra}
                  onChange={(e) => setQuadra(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
              <fieldset className="w-1/3">
                <label className="2xl:text-xl text-md text-traco font-bold">Lote*</label>
                <input
                  type="text"
                  value={lote}
                  onChange={(e) => setLote(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
              <fieldset className="w-1/4">
                <label className="2xl:text-xl text-md text-traco font-bold">Nº*</label>
                <input
                  type="text"
                  value={numero_endereco}
                  onChange={(e) => setNumeroEndereco(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
            </div>

            <div className="flex gap-3 w-full mt-2">
              <fieldset className="w-[70%]">
                <label className="2xl:text-xl text-md text-traco font-bold">
                  Município*
                </label>
                <input
                  required
                  type="text"
                  value={municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
              <fieldset className="w-[25%]">
                <label className="2xl:text-xl text-md text-traco font-bold">UF*</label>
                <input
                  required
                  type="text"
                  value={uf}
                  maxLength={2}
                  onChange={(e) => setUf(formatarUF(e.target.value))}
                  className="bg-white border border-gray-300 w-full 2xl:h-13 h-10 rounded-lg p-2 text-traco shadow-sm"
                />
              </fieldset>
            </div>
          </section>
        </div>

        <input
          type="button"
          value="Prosseguir"
          disabled={!isFormValid}
          onClick={onNext}
          className="self-center bg-traco 2xl:h-16 h-12 rounded-xl w-[60%] 2xl:text-3xl text-2xl font-bold text-white hover:bg-white hover:text-traco border-2 border-traco transition cursor-pointer shadow-lg mb-4"
        />
      </main>
    </div>
  );
}

export default CadastroVendedor;
