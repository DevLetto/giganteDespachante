import { ArrowLeft, Bold } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServicoData from "../data/Servicos.json";
import { useState } from "react";
import BackButton from '../components/BackBtn'
import RegisterDone from '../components/RegisterDone'

function Cadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServi] = useState("");
  const [valor_servico, setValorServ] = useState("");
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [chassi, setChassi] = useState("");
  const [cor, setCor] = useState("");
  const [cadasDone, setCadasDone] =useState(false)

  const servicos = ServicoData;

  const handleServicoChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nomeServico = e.target.value;
    setServi(nomeServico);

    const precoServico = selectedOption.dataset.price;
    setValorServ(precoServico);
  };

  const verifyCPF_CNPJ = (e) => {
    if(e.target.length == 11){

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosCadastro = {
      nome,
      cpf_cnpj,
      telefone,
      servico,
      valor_servico,
      placa,
      modelo,
      ano,
      chassi,
      cor,
    };

    try {
      const response = await fetch("http://localhost:8080/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosCadastro),
      });

      if (response.ok) {
        console.log("Cadastro realizado");
        
        setCadasDone(true)

        setTimeout(() => {
          setCadasDone(false)
          navigate(-1)
          
        }, 2000);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <div className="w-screen h-screen bg-fundo flex  items-center flex-col relative ">
      <header className=" w-screen h-max ">
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft
            size={60}
            className="text-traco hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer"
          />
        </BackButton>
      </header>

      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[70%] h-[80%] justify-between flex flex-col "
      >
        <main className="flex justify-between   ">
          <div>
            <div className="border-b border-traco mb-20 ml-8 mr-8  text-center ">
              <h1 className="text-traco text-6xl font-[Arial] font-bold">
                Cadastro
              </h1>
            </div>

            <section className="border-2 border-traco flex flex-col items-center w-100 h-[460px] gap-10 pt-3">
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
                  type="number"
                  name="CPF"
                  maxLength={14}
                  placeholder="Somente números"
                  onChange={(e) => setCpf(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
                />
              </fieldset>

              <fieldset className="w-[98%]">
                <label
                  htmlFor="Telef"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Telefone*
                </label>
                <input
                  required
                  type="tel"
                  name="Telef"
                  placeholder="Somente números"
                  maxLength={11}
                  
                  onChange={(e) => setTelefone(e.target.value)}
                  className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
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
                  onChange={handleServicoChange}
                  className="bg-white  h-12 rounded-lg w-full  p-1 text-traco"
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
          </div>

          <section className="border-2 border-traco flex flex-col items-center w-100 gap-10 pt-6">
            <fieldset className="w-[98%] flex flex-col">
              <label
                htmlFor="placa"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Placa*
              </label>
              <input
                required
                type="text"
                name="placa"
                maxLength={7}
                onChange={(e) => setPlaca(e.target.value)}
                className="bg-white  h-12 rounded-lg w-[50%]  p-1 text-traco"
              />
            </fieldset>

            <fieldset className="w-[98%]">
              <label
                htmlFor="modelo"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Modelo*
              </label>
              <input
                required
                type="text"
                name="modelo"
                onChange={(e) => setModelo(e.target.value)}
                className="bg-white  h-12 rounded-lg w-full  p-1 text-traco"
              />
            </fieldset>

            <fieldset className="w-[98%] flex flex-col">
              <label
                htmlFor="ano"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Ano*
              </label>
              <input
                required
                type="number"
                name="ano"
                maxLength={4}
                onChange={(e) => setAno(e.target.value)}
                className="bg-white  h-12 rounded-lg w-[50%]  p-1 text-traco [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />
            </fieldset>

            <fieldset className="w-[98%]">
              <label
                htmlFor="chassi"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Chassi*
              </label>
              <input
                required
                type="text"
                name="chassi"
                maxLength={17}
                onChange={(e) => setChassi(e.target.value)}
                className="bg-white  h-12 rounded-lg w-full  p-1 text-traco"
              />
            </fieldset>

            <fieldset className="w-[98%] flex flex-col">
              <label
                htmlFor="cor"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Cor*
              </label>
              <input
                required
                type="text"
                name="cor"
                onChange={(e) => setCor(e.target.value)}
                className="bg-white  h-12 rounded-lg w-[50%]  p-1 text-traco"
              />
            </fieldset>
          </section>
        </main>
        <input
          type="submit"
          value="Finalizar"
          className="self-center bg-white  h-12 rounded-lg w-[30%] text-3xl font-bold p-1 text-traco hover:bg-traco hover:text-white transition hover:cursor-pointer"
        />
      </form>

      <div className={`${!cadasDone? "hidden" : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-transparent backdrop-blur-sm flex items-center justify-center"}`}>
        <RegisterDone />
        {/* <h1>aga</h1> */}
      </div>
    </div>
  );
}

export default Cadastrar;
