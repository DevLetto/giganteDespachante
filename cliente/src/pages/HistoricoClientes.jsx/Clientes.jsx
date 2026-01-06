import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Buscas from "./BuscarCliente";
import Tabela from "./TabelaClientes";
import MostrarUsuario from "../../components/MostrarCadastro";
import TabelaClientes from "./TabelaClientes";
import MostrarCliente from "../../components/MostrarCliente";
import { apiFetch } from "../../services/api";

function Clientes() {
  const navigate = useNavigate();

  const [busca, setBusca] = useState("");
  const [lista, setLista] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  async function buscarClientes() {
    const url = busca ? `/clientes?busca=${busca}` : `/clientes`;

    try {
      const response = await apiFetch(url);
      const dados = await response.json();
      setLista(dados);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      buscarClientes();
    }, 400);

    return () => clearTimeout(delay);
  }, [busca]);

  return (
    <div className="w-screen h-screen bg-fundo flex flex-col items-center gap-5">
      <div className="w-full flex justify-center relative pt-2">
        <div className="absolute top-0 left-0">
          <Header
            navigate={() => navigate("/menu")}
            icon={ArrowLeft}
            color={"text-traco"}
            text={"Voltar"}
          />
        </div>

        <Buscas busca={busca} setBusca={setBusca} />
      </div>

      <Tabela
        lista={lista}
        abrirHistorico={(cliente) => setClienteSelecionado(cliente)}
      />

      {clienteSelecionado && (
        <MostrarCliente
          id={clienteSelecionado.id} // Use o ID retornado pelo banco
          voltar={() => setClienteSelecionado(null)}
        />
      )}
    </div>
  );
}

export default Clientes;
