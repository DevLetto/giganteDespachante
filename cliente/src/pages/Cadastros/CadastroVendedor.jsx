import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SureConfirmation from "../../components/SureConfirmation";
import { formatarCpfCnpj } from "../../utils/mascara";

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

  const algumCampoPreenchido = nome || cpf_cnpj || rg || email ;

  const handleBack = () => {
    if (algumCampoPreenchido) {
      console.log("cade");
      setShowConfirm(true); // abre a tela de confirmação
    } else {
      navigate("/menu"); // volta normalmente
    }
  };

  return (
    <div className="w-screen h-screen bg-fundo flex items-center flex-col ">
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

      <main className="flex flex-col justify-between items-center w-250 gap-15 ">
        {/* div cabeçalho */}
        <div className="flex items-center justify-center w-full ">
          <div className="border-b border-traco w-[50%]  text-center">
            <h1 className="text-traco text-6xl font-[Arial] font-bold">
              Vendedor
            </h1>
          </div>
        </div>
        {/* div containers */}
        <div className="flex flex-row gap-5">
          {/* Coluna 1 */}
          <section className="border-2 border-traco flex flex-col items-center w-100 h-[460px] gap-10 p-2">
            <fieldset className="w-[98%] ">
              <label
                htmlFor="Nome"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Nome do Vendedor*
              </label>
              <input
                required
                type="text"
                name="Nome"
                value={nome}
                autoComplete="off"
                onChange={(e) => setNome(e.target.value)}
                className="bg-white w-full h-12 rounded-lg p-1 text-traco"
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
                placeholder="Somente números"
                onChange={(e) => setCpf(formatarCpfCnpj(e.target.value))}
                className="bg-white w-full h-12 rounded-lg p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
              />
            </fieldset>
          
            <fieldset className="w-[98%] flex gap-5">
              <div className="w-[45%]">
                <label
                  htmlFor="rg"
                  className="text-lg text-traco font-bold font-[Arial]"
                >
                  RG*
                </label>
                <input
                  required
                  type="text"
                  name="rg"
                  value={rg}
                  autoComplete="off"
                  onChange={(e) => setRg(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg p-1 text-traco"
                />
              </div>
              <div className="w-[45%]">
                <label
                  htmlFor="expedidor"
                  className="text-lg text-traco font-bold font-[Arial]"
                >
                  Orgão Expedidor*
                </label>
                <input
                  required
                  type="text"
                  name="expedidor"
                  value={orgaoexpedidor}
                  autoComplete="off"
                  onChange={(e) => setOrgaoExpedidor(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg p-1 text-traco"
                />

              </div>

            </fieldset>
            
          </section>

          {/* Coluna 2 */}

          <section className="border-2 border-traco  flex flex-col items-center w-100 h-[460px] gap-10 p-2">
            <fieldset className="w-[98%]">
              <label
                htmlFor="EstadoCivil"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Estado Civil*
              </label>
              <select
                required
                type="EstadoCivil"
                name="email"
                value={estadoCivil}
                autoComplete="off"
                onChange={(e) => setEstadoCivil(e.target.value)}
                className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
              >
                <option value="valor">Pato</option>
              </select>
            </fieldset>
            <fieldset className="w-[98%]">
              <label
                htmlFor="celular"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Telefone*
              </label>
              <input
                required
                type="text"
                name="celular"
                value={celular}
                autoComplete="off"
                onChange={(e) => setCelular(e.target.value)}
                className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
              />
            </fieldset>
            <fieldset className="w-[98%]">
              <label
                htmlFor="email"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                E-mail*
              </label>
              <input
                required
                type="email"
                name="email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
              />
            </fieldset>

            
          </section>

          {/* Coluna 3 */}
          <section className="border-2 border-traco flex flex-col items-center w-150 h-[460px] gap-10 p-2">
            <fieldset className="w-[98%] flex justify-between">
              <div className="w-[48%] ">
                <label
                  htmlFor="Rua/Av"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Rua/Av*
                </label>
                <input
                  required
                  type="text"
                  name="Rua/Av"
                  value={rua_av}
                  autoComplete="off"
                  onChange={(e) => setRuaAv(e.target.value)}
                  className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
                />
              </div>
              <div className="w-[48%]">
                <label
                  htmlFor="Bairro"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Bairro*
                </label>
                <input
                  required
                  type="text"
                  name="Bairro"
                  value={bairro}
                  autoComplete="off"
                  onChange={(e) => setBairro(e.target.value)}
                  className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
                />
              </div>
            </fieldset>
          </section>
        </div>

        <input
          type="submit"
          value="Prosseguir"
          disabled={!isFormValid}
          onClick={onNext}
          className="self-center bg-traco  h-12 rounded-lg w-[60%] text-3xl font-bold p-1 text-white hover:bg-white hover:text-traco transition hover:cursor-pointer"
        />
      </main>
    </div>
  );
}

export default CadastroVendedor;
