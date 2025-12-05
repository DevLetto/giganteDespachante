import Header from "../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Pesquisar(){

    const navigate = useNavigate()

    return(
        <div className='w-screen h-screen bg-fundo flex gap-20 items-center flex-col  '>
            <Header 
                navigate={() => navigate("/menu")}
                icon={ArrowLeft}
                color={"text-traco"}
                hover ={"text-white"}
                text={"Voltar"}
            />
            <main className="w-3xl h-180 border flex flex-col items-center">
                <div className="flex flex-col w-[90%]">
                    <label for="pesquisar" className="text-[2.6rem] text-traco font-bold font-[Arial]">Pesquisar por placa ou serviço</label>
                    <input type="text" name="pesquisar" placeholder="nananinanao" className="w-full h-20 text-traco text-3xl  bg-white rounded-lg" />
                </div>
            </main>

        </div>
    )

}

export default Pesquisar;