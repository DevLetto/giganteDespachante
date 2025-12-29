import { Search } from "lucide-react";

function BuscarCliente({ busca, setBusca }) {
  return (
    <div className="flex flex-row items-center">
      <div className="bg-white h-14 flex items-center rounded-bl-lg rounded-tl-lg">
        <Search size={40} className="text-traco" />
      </div>

      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Pesquisar cliente, CPF ou placa"
        className="bg-white h-14 w-xl text-xl text-traco rounded-tr-lg rounded-br-lg px-2"
      />
    </div>
  );
}

export default BuscarCliente;