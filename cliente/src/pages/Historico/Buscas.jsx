import { useState } from "react";
import { Search, Funnel, ChevronDown } from "lucide-react";
import { formatarPlaca } from "../../utils/mascara";

function Buscas({ placa, setPlaca, filtro }) {
  return (
    <div className="flex flex-row items-center">
      <div className="bg-white 2xl:h-16 h-14 flex items-center rounded-bl-lg rounded-tl-lg">
        <Search size={50} className="text-traco" />
      </div>
      <input
        type="text"
        value={placa}
        maxLength={8}
        onChange={(e) => setPlaca(formatarPlaca(e.target.value))}
        placeholder="Pesquisar Placa"
        className="bg-white 2xl:h-16 h-14 w-xl text-2xl text-traco"
      />
      <button
        className="2xl:h-16 h-14 p-1 flex flex-row items-center bg-traco text-white rounded-tr-lg rounded-br-lg hover:bg-[#012e5f] hover:cursor-pointer "
        onClick={filtro}
      >
        <Funnel />
        Filtro
        <ChevronDown />
      </button>
    </div>
  );
}

export default Buscas;
