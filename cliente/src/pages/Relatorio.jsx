import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";



function Relatorio(){

    const navigate = useNavigate()

    return(
        <div className='w-screen h-screen bg-fundo flex 2xl:gap-70 gap-30 items-center flex-col  '>
            <header className="w-full h-max">
                <Header 
                    navigate={() => navigate("/menu")}
                    icon={ArrowLeft}
                    color={"text-traco"}
                    hover={"text-white"}
                    text={"Voltar"}
                />
            </header>
            
        </div>
    )
}

export default Relatorio