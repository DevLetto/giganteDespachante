import { Clock, User, UserRoundPlus, NotebookText, List, Cog } from "lucide-react";
import Logo from "../assets/LogoGiganteDespachante.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GerarRelatorio from "../components/gerarRelatorio";
import LogoutBtn from "../components/LogoutBtn";

function Menu() {
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false)

  function handleShowOptions(){
    setShowOptions(!showOptions)
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"; // desativa scroll na página

    return () => {
      document.body.style.overflow = "auto"; // volta ao normal ao sair do componente
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-fundo flex 2xl:gap-40 gap-10 items-center flex-col  ">
      <header className="  w-screen flex  flex-row justify-between">
        <img src={Logo} alt="Logo Gigante Despachante" className=" w-2xs" />
        <div className="relative">
            <button onClick={handleShowOptions} className=" text-traco hover:text-white hover:bg-traco transition rounded-bl-lg rounded-tl-lg hover:cursor-pointer flex flex-col items-center p-2">
              <User size={60} />
              <p className=" text-2xl font-bold font-[Arial]">Perfil</p>
            </button>

            
            {showOptions &&(
                <div className="absolute top-[110%] right-[10%] flex gap-2 flex-col p-2 bg-white rounded-lg">
                  <button onClick={() => navigate("/perfil")} className="w-50 h-15 bg-fundo text-traco hover:bg-traco hover:text-white text-2xl rounded-lg border border-traco  flex flex-row justify-center items-center gap-3">
                      <Cog size={30} /> Configurações
                  </button>
                  <div className=" bg-white w-max h-max rounded-lg ">
                      <LogoutBtn />
                  </div>
                </div>
            )}

        </div>

      </header>
      <main className="2xl:w-[500px] 2xl:h-[550px] w-[400px] h-[450px] bg-fundo flex flex-col items-center justify-around  border-3 border-traco shadow-2xl rounded-lg ">
        <button
          onClick={() => navigate("/cadastrar")}
          className="w-[90%] 2xl:h-25 h-20  bg-traco rounded-lg 2xl:text-3xl text-2xl text-white hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center pl-5 gap-8"
        >
          <UserRoundPlus size={60} /> Iniciar Cadastro
        </button>

        <button
          onClick={() => navigate("/pesquisar")}
          className="w-[90%] 2xl:h-25 h-20 bg-traco rounded-lg 2xl:text-3xl text-xl text-white hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center pl-5 gap-8"
        >
          <Clock size={60} /> Histórico de Serviços
        </button>

        <button
          onClick={() => navigate("/clientes")}
          className="w-[90%] 2xl:h-25 h-20 bg-traco rounded-lg 2xl:text-3xl text-xl text-white hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center pl-5 gap-8"
        >
          <List size={60} /> Lista de Clientes
        </button>

        <button
          onClick={() => navigate("/relatorio")}
          className="w-[90%] 2xl:h-25 h-20 bg-traco rounded-lg 2xl:text-3xl text-xl text-white hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center pl-5 gap-8"
        >
          <NotebookText size={60} /> Relatório
        </button>
      </main>
    </div>
  );
}

export default Menu;
