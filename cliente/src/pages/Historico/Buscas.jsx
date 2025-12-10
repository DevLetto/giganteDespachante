import { useState } from "react";
import { Search, Funnel, ChevronDown } from "lucide-react";

function Buscas(placa, setPlaca){
    
    
    return (
        <div className="flex flex-row items-center">
            <div className="bg-white h-16 flex items-center rounded-bl-lg rounded-tl-lg">
                <Search size={50} className="text-traco" />
            </div>
            <input type="text"  onChange={(e) => setPlaca(e.target.value)}  placeholder="Pesquisar Placa" className="bg-white h-16 w-xl text-2xl text-traco" />
            <button className="h-16  flex flex-row items-center bg-traco text-white rounded-tr-lg rounded-br-lg ">
                <Funnel />
                Filtro
                <ChevronDown />
            </button>
        </div>
    )

}

export default Buscas;