import {User} from "lucide-react"
import Logo from '../assets/LogoGiganteDespachante.png'
import { useNavigate } from 'react-router-dom';



function Menu(){

    const navigate = useNavigate()

    function onCadastrarClick(){
    navigate('/cadastro')
    }

    function onPesquisarClick(){
    navigate('/pesquisar')
    }

    return(
        <div className='w-screen h-screen bg-fundo flex gap-70 items-center flex-col  '>
            <header className="  w-screen flex flex-row justify-between">
                <img src={Logo} alt="Logo Gigante Despachante" className=" w-2xs" />
               <button className=" text-traco hover:text-white hover:bg-traco transition rounded-bl-lg rounded-tl-lg" >
                   <User   size={60}/>
               </button> 
            </header>
            <main className="w-[500px] h-[350px] border-2 border-traco flex flex-col items-center justify-around  rounded-lg shadow-2xl">  

                <button onClick={() => navigate('/cadastrar')}

                className="w-[90%] h-[60px] bg-white rounded-lg text-2xl text-traco hover:bg-traco hover:text-white transition">
                    Cadastrar Cliente
                
                </button>


                <button onClick={() => navigate('/pesquisar')}
                 className="w-[90%] h-[60px] bg-white rounded-lg text-2xl text-traco hover:bg-traco hover:text-white transition">
                    Pesquisar Serviço
                </button>

            </main>
          </div>
    )

} 

export default Menu;