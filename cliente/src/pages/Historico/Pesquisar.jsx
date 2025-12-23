import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Buscas from "./Buscas";
import Tabela from "./Tabela";
import Filtros from "./Filtros";
import MostrarUsuario from "../../components/mostrarUsuario";

function Pesquisar() {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [lista, setLista] = useState([]);
  const [servico, setServico] = useState("");
  const [valorServ, setValorServ] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [sempre, setSempre] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showFiltro, setShowFiltro] = useState(false);
  const [idCliente, setIdCliente] = useState("");

  const [filtrosAplicados, setFiltrosAplicados] = useState({
    servico: "",
    valorServ: "",
    dataInicial: "",
    dataFinal: "",
  });

  const buscarHistorico = useCallback(
    async (filtrosOverride = {}) => {
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
    },
    [placa, filtrosAplicados]
  );

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

  const mostrarInfoUser = (id) => {
    setIdCliente(id);
    setShowDetails(true);
    console.log(id);
  };

  const handleShowFiltro = () => {
    setShowFiltro(!showFiltro);
  };

  return (
    <div className="w-screen h-screen bg-fundo flex gap-5 items-center flex-col  ">
      <div className=" w-full flex justify-center  relative pt-2">
        <div className="absolute  top-0 left-0 ">
          <Header
            navigate={() => navigate("/menu")}
            icon={ArrowLeft}
            color={"text-traco"}
            hover={"text-white"}
            text={"Voltar"}
          />
        </div>
        {}
        <div className="w-max h-max relative">
          <Buscas placa={placa} setPlaca={setPlaca} filtro={handleShowFiltro} />

          {showFiltro && (
            <div className="absolute 2xl:right-[-56%] right-[-30%] 2xl:top-[60%] top-[110%] ">
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
          )}
        </div>
      </div>
      <Tabela lista={lista} verDetalhe={mostrarInfoUser} />

      {showDetails && (
        <MostrarUsuario id={idCliente} voltar={() => setShowDetails(false)} />
      )}
    </div>
  );
}

export default Pesquisar;
