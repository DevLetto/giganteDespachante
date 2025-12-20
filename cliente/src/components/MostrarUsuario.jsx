import Header from "./Header";
import { ArrowLeft } from "lucide-react";

function MostrarUsuario(){
    return (
        
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-10">
            <main className="w-200 h-200 bg-fundo rounded-lg">
                <Header
                   icon={ArrowLeft} 
                   color={"text-traco"}
                   text={"Voltar"}

                />


            </main>

        </div>
    
    )
}

export default MostrarUsuario