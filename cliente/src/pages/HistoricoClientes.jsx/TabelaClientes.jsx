function TabelaClientes({ lista, abrirHistorico }) {
  return (
    <div className="w-xl h-screen bg-white rounded-lg overflow-auto custom-scroll">
      <ul>
        {lista.map((item) => (
          <li
            key={item.cpf_cnpj}
            className="w-full h-24 bg-fundo border-2 rounded-lg flex flex-col justify-between p-2 font-semibold mb-2"
          >
            <div className="flex justify-between">
              <p className="text-xl font-bold">{item.nome}</p>
              <p>{item.cpf_cnpj}</p>
            </div>

            <div className="flex justify-between">
              <p>{item.placa} — {item.modelo}</p>

              <button
                onClick={() => abrirHistorico(item)}
                className="text-traco hover:text-[#012e5f]"
              >
                Ver histórico →
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabelaClientes;
