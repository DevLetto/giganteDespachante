import { ArrowLeft, Bold } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServicoData from "../data/Servicos.json";
import { useState } from "react";

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

  const servicos = ServicoData;

  const handleServicoChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nomeServico = e.target.value;
    setServi(nomeServico);

    const precoServico = selectedOption.dataset.price;
    setValorServ(precoServico);
  };

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
        navigate(-1)
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <div className="w-screen h-screen bg-fundo flex  items-center flex-col  ">
      <header className=" w-screen h-max ">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft
            size={60}
            className="text-traco hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer"
          />
        </button>
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
                  Nome do Cliente
                </label>
                <input
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
                  CPF/CNPJ
                </label>
                <input
                  type="number"
                  name="CPF"
                  onChange={(e) => setCpf(e.target.value)}
                  className="bg-white w-full h-12 rounded-lg p-1 text-traco"
                />
              </fieldset>

              <fieldset className="w-[98%]">
                <label
                  htmlFor="Telef"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  name="Telef"
                  onChange={(e) => setTelefone(e.target.value)}
                  className="bg-white  h-12 w-full rounded-lg p-1 text-traco"
                />
              </fieldset>

              <fieldset className="w-[98%]">
                <label
                  htmlFor="Servi"
                  className="text-xl text-traco font-bold font-[Arial]"
                >
                  Serviço Feito
                </label>
                <select
                  name="Servi"
                  onChange={handleServicoChange}
                  className="bg-white  h-12 rounded-lg w-full  p-1 text-traco"
                >
                  <option value="" >
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
                Placa
              </label>
              <input
                type="text"
                name="placa"
                onChange={(e) => setPlaca(e.target.value)}
                className="bg-white  h-12 rounded-lg w-[50%]  p-1 text-traco"
              />
            </fieldset>

            <fieldset className="w-[98%]">
              <label
                htmlFor="modelo"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Modelo
              </label>
              <input
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
                Ano
              </label>
              <input
                type="number"
                name="ano"
                onChange={(e) => setAno(e.target.value)}
                className="bg-white  h-12 rounded-lg w-[50%]  p-1 text-traco"
              />
            </fieldset>

            <fieldset className="w-[98%]">
              <label
                htmlFor="chassi"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Chassi
              </label>
              <input
                type="text"
                name="chassi"
                onChange={(e) => setChassi(e.target.value)}
                className="bg-white  h-12 rounded-lg w-full  p-1 text-traco"
              />
            </fieldset>

            <fieldset className="w-[98%] flex flex-col">
              <label
                htmlFor="cor"
                className="text-xl text-traco font-bold font-[Arial]"
              >
                Cor
              </label>
              <input
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
    </div>
  );
}

export default Cadastrar;
