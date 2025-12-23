import {Clock, User, UserRoundPlus} from "lucide-react"
import Logo from '../assets/LogoGiganteDespachante.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";





function Menu(){

    const navigate = useNavigate()

    function onCadastrarClick(){
    navigate('/cadastro')
    }

    function onPesquisarClick(){
    navigate('/pesquisar')
    }

    useEffect(() => {
        document.body.style.overflow = "hidden"; // desativa scroll na página
    
        return () => {
          document.body.style.overflow = "auto"; // volta ao normal ao sair do componente
        };
      }, []);

    return(
        <div className='w-screen h-screen bg-fundo flex 2xl:gap-70 gap-30 items-center flex-col  '>
            <header className="  w-screen flex  flex-row justify-between">
                <img src={Logo} alt="Logo Gigante Despachante" className=" w-2xs" />
               <button className=" text-traco hover:text-white hover:bg-traco transition rounded-bl-lg rounded-tl-lg hover:cursor-pointer flex flex-col items-center p-2" >
                   <User   size={60}/>
                   <p className=" text-2xl font-bold font-[Arial]">Perfil</p>
               </button> 
            </header>
            <main className="2xl:w-[500px] 2xl:h-[350px] w-[400px] h-[250px] bg-fundo flex flex-col items-center justify-around  border-3 border-traco shadow-2xl rounded-lg ">  

                <button onClick={() => navigate('/cadastrar')}

                className="w-[90%] 2xl:h-25 h-20  bg-traco rounded-lg 2xl:text-3xl text-2xl text-white hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center pl-5 gap-8" >
                    <UserRoundPlus size={60} className=""/> Iniciar Cadastro
                
                </button>


                <button onClick={() => navigate('/pesquisar')}
                 className="w-[90%] 2xl:h-25 h-20 bg-traco rounded-lg 2xl:text-3xl text-xl text-white hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center pl-5 gap-8">
                    <Clock size={60} className=""/> Histórico de Serviços
                </button>

            </main>
          </div>
    )
} 

export default Menu;