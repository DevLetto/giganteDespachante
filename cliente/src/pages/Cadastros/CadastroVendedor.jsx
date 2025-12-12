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
  cpf_cnpj,
  setCpf,
  email,
  setEmail,
  endereco,
  setEndereco,
  isFormValid,
  onNext,
}) {
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);

  const algumCampoPreenchido =
    nome || cpf_cnpj || email || endereco;

  const handleBack = () => {
    if (algumCampoPreenchido) {
      console.log("cade")
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

      <main className="flex flex-col justify-between gap-15">
        <div>
          <div className="border-b border-traco  ml-8 mr-8 text-center">
            <h1 className="text-traco text-6xl font-[Arial] font-bold">
              Vendedor
            </h1>
          </div>
        </div>
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
              onChange={(e) => setCpf(formatarCpfCnpj (e.target.value))}
              className="bg-white w-full h-12 rounded-lg p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
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
              className="bg-white w-full h-12 rounded-lg p-1 text-traco"
            />
          </fieldset>
        </section>
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
