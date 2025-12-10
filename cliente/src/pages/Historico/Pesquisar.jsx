import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Buscas from "./Buscas";

function Pesquisar(){

    const navigate = useNavigate()

    const [placa, setPlaca] = useState("")

    useEffect(() => {
        document.body.style.overflow = "hidden"; // desativa scroll na página
    
        return () => {
          document.body.style.overflow = "auto"; // volta ao normal ao sair do componente
        };
      }, []);

    return(
        <div className='w-screen h-screen bg-fundo flex gap-20 items-center flex-col  '>
            <div className="border w-[40%   ]">
                <Header
                    navigate={() => navigate("/menu")}
                    icon={ArrowLeft}
                    color={"text-traco"}
                    hover ={"text-white"}
                    text={"Voltar"}
                />
            </div>
            <Buscas />

        </div>
    )

}

export default Pesquisar;