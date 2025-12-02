import BackButton from "../../components/BackBtn";
import { ArrowLeft } from "lucide-react";
import ServicoData from "../../data/Servicos.json";

function CadastroCliente(
  nome,
  SetNome,
  cpf_cnpj,
  setCpf,
  telefone,
  setTelefone,
  servico,
  setServi,
  valor_servico,
  setValorServ,
  placa,
  setPlaca,
  modelo,
  setModelo,
  ano,
  setAno,
  chassi,
  setChassi,
  cor,
  setCor,
  onSubmit,
  handleServicoChange,
  onPrev
) {

  const servicos = ServicoData;

  return (
    <div>
      <header className=" w-screen h-max ">
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft
            size={60}
            className="text-traco hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer"
          />
        </BackButton>
      </header>
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
                type="number"
                name="CPF"
                maxLength={14}
                autoComplete="off"
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
                autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
    </div>
  );
}

export default CadastroCliente;
