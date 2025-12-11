import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Buscas from "./Buscas";
import Tabela from "./Tabela";

function Pesquisar(){

    const navigate = useNavigate()

    const [placa, setPlaca] = useState("")

    useEffect(() => {
        document.body.style.overflow = "hidden"; // desativa scroll na página
    
        return () => {
          document.body.style.overflow = "auto"; // volta ao normal ao sair do componente
        };
      }, []);

    useEffect(() => {
        async function pegarDados(){

            
            const response = await fetch("")

            

        }
    }, [])

    return(
        <div className='w-screen h-screen bg-fundo flex gap-5 items-center flex-col  '>
            <div className=" w-full flex ">
                <div className="w-[31%] ">
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
            <Tabela />


        </div>
    )

}

export default Pesquisar;