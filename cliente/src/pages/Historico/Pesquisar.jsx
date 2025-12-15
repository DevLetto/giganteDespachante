import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Buscas from "./Buscas";
import Tabela from "./Tabela";
import InfoCadastro from "./InfoCadastro";
import Filtros from "./Filtros";

function Pesquisar() {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [lista, setLista] = useState([]);
  const [servico, setServico] = useState("")
  const [valorServ, setValorServ] = useState("")
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [sempre, setSempre] = useState(false)
                                                                
  useEffect(() => {
    document.body.style.overflow = "hidden"; // desativa scroll na página

    return () => {
      document.body.style.overflow = "auto"; // volta ao normal ao sair do componente
    };
  }, []);

  useEffect(() => {
    async function pegarDados() {

        try{
            const response = await fetch("http://localhost:8080/historico");

            if(!response.ok){
                console.error("Erro ao carregar historico. Status:", response.status)
                setLista([])
                return
            }

            const dados = await response.json()
            console.log("DADOS: ", dados )

            if(Array.isArray(dados)){
                setLista(dados)
                
            }else{
                console.error("Dados recebidos não são arrays:", dados)
                setLista([]);
            }
            

        }catch(error){
            console.error("Erro ao executar requisição", error)
            setLista([])
        }
    }

    pegarDados()
  }, []);

  return (
    <div className="w-screen h-screen bg-fundo flex gap-5 items-center flex-col relative ">
      <div className=" w-full flex ">
        <div className="w-[31%] ">
          <Header
            navigate={() => navigate("/menu")}
            icon={ArrowLeft}
            color={"text-traco"}
            hover={"text-white"}
            text={"Voltar"}
          />
        </div>
        <Buscas 
        placa={placa}
        setPlaca={setPlaca}
        />
      </div>
      <Tabela 
      
      lista={lista}
      />

      <div className="absolute right-50 top-10 ">
        <Filtros 
          servico={servico}
          setServi={setServico}
          valorServ={valorServ}
          setValorServ={setValorServ}
        />
      </div>

      
    </div>
  );
}

export default Pesquisar;
