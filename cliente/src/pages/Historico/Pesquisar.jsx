import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react"; 
import Buscas from "./Buscas";
import Tabela from "./Tabela";
import Filtros from "./Filtros";

function Pesquisar() {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [lista, setLista] = useState([]);
  const [servico, setServico] = useState("");
  const [valorServ, setValorServ] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [sempre, setSempre] = useState(false);
  
  const [filtrosAplicados, setFiltrosAplicados] = useState({
      servico: "",
      valorServ: "",
      dataInicial: "",
      dataFinal: "",
  });


  const buscarHistorico = useCallback(async (filtrosOverride = {}) => {
    try {
      const currentFiltros = { ...filtrosAplicados, ...filtrosOverride };
      
      const queryParams = new URLSearchParams();
      
      if (placa) {
        queryParams.append("placa", placa);
      }

      if (currentFiltros.servico) {
        queryParams.append("servico", currentFiltros.servico);
      }
      if (currentFiltros.valorServ) {
        queryParams.append("valorServ", currentFiltros.valorServ);
      }
      if (currentFiltros.dataInicial) {
        queryParams.append("dataInicial", currentFiltros.dataInicial);
      }
      if (currentFiltros.dataFinal) {
        queryParams.append("dataFinal", currentFiltros.dataFinal);
      }

      const url = `http://localhost:8080/historico?${queryParams.toString()}`;

      const response = await fetch(url);

      if (!response.ok) {
        console.error("Erro ao carregar historico. Status:", response.status);
        setLista([]);
        return;
      }

      const dados = await response.json();
      setLista(Array.isArray(dados) ? dados : []);
    } catch (error) {
      console.error("Erro ao executar requisição", error);
      setLista([]);
    }
  }, [placa, filtrosAplicados]); 

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!placa) {
        buscarHistorico(); 
        return;
    }

    const handler = setTimeout(() => {
      buscarHistorico();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [placa, buscarHistorico]);

  const aplicarFiltros = () => {
      setFiltrosAplicados({
          servico,
          valorServ,
          dataInicial,
          dataFinal,
      });

  };

  const removerFiltros = () => {
      setServico("");
      setValorServ("");
      setDataInicial("");
      setDataFinal("");
      
      setFiltrosAplicados({
          servico: "",
          valorServ: "",
          dataInicial: "",
          dataFinal: "",
      });
      
  };


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
        {}
        <Buscas placa={placa} setPlaca={setPlaca} />
      </div>
      <Tabela lista={lista} />

      <div className="absolute right-50 top-10 ">
        <Filtros
          servico={servico}
          setServi={setServico}
          valorServ={valorServ}
          setValorServ={setValorServ}
          dataInicial={dataInicial}
          setDataInicial={setDataInicial}
          dataFinal={dataFinal}
          setDataFinal={setDataFinal}
          aplicarFiltros={aplicarFiltros}
          removerFiltros={removerFiltros}
        />
      </div>
    </div>
  );
}

export default Pesquisar;