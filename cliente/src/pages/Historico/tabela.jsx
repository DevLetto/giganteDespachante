function Tabela({ lista, verDetalhe }) {

  function verDetalhes(item){
    console.log(item)
    verDetalhe(item)
    
  }

  return (
    <div className=" 2xl:w-2xl w-xl h-screen bg-white rounded-lg overflow-auto custom-scroll">
      <ul>
        {lista.map((item) => (
          <li  key={item.id} className="w-full h-25 bg-fundo border-2 rounded-lg flex flex-col justify-between p-2 font-semibold mb-2">
            <div className="flex flex-row w-full justify-between ">
              <p className="text-xl font-bold ">{item.placa}</p>

              <div className="flex flex-row gap-4  ">
                <p>{item.hora}</p>
                <p>{item.data}</p>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p>{item.servico}</p>
              <button
                onClick={() => {verDetalhes(item.id)}}
                className="text-traco hover:cursor-pointer hover:text-[#012e5f]"
              >
                Ver detalhes...
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabela;
