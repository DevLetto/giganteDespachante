import ServicoData from "../../data/Servicos.json";

function Filtros({ servico, setServi, setValorServ, setDataInicial, setDataFinal, setSempre, aplicarFiltros, removerFiltros }) {
  const servicos = ServicoData;

  const handleServicoChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nomeServico = e.target.value;
    setServi(nomeServico);

    const precoServico = selectedOption.dataset.price;
    setValorServ(precoServico);
  };

  return (
    <div className="w-100 h-82 p-2 bg-fundo border border-traco rounded-lg shadow-2xl flex flex-col gap-8 ">
      <fieldset className="w-[98%]">
        <label
          htmlFor="Servi"
          className="text-xl text-traco font-bold font-[Arial]"
        >
          Serviço:
        </label>
        <select
          required
          name="Servi"
          value={servico}
          onChange={handleServicoChange}
          className="bg-white  h-12 rounded-lg w-full  p-1 text-traco hover:cursor-pointer"
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

      <fieldset className="w-[98%] text-xl text-traco font-bold font-[Arial] flex flex-col gap-2">
        <p>Data:</p>
        <div>
          <input type="checkbox" onChange={setSempre} name="sempre" className=" w-4 h-4  accent-traco peer hover:cursor-pointer" />
          <label htmlFor="sempre"> Desde sempre</label>
        </div>
        <div className="flex flex-row gap-2">
          <div className=" flex flex-row items-center gap-2">
            <label htmlFor="dataIncial">De</label>
            <input type="date" onChange={setDataInicial} name="dataInicial" className="text-lg bg-white rounded-lg w-33 hover:cursor-pointer" />
          </div>
          <div className=" flex flex-row items-center gap-2">
            <label htmlFor="dataFinal">Até</label>
            <input type="date" onChange={setDataFinal} name="dataFinal" className="text-lg bg-white rounded-lg w-33 hover:cursor-pointer"  />
          </div>
        </div>
      </fieldset>

      <fieldset className="w-[98%] flex gap-4 items-center justify-center mt-5">
        <button className="w-[50%] h-12 bg-traco hover:bg-white text-white hover:text-traco font-bold rounded-lg border border-traco"> Aplicar Filtros</button>
        <button className="w-[50%] h-12 bg-red-600 hover:bg-white text-white hover:text-red-600 font-bold rounded-lg border border-red-600"> Remover Filtros</button>
      </fieldset>
    </div>
  );
}

export default Filtros;
