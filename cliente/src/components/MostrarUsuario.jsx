import Header from "./Header";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import GerarProcuração from "./GerarProcuração";

function MostrarUsuario({ id, voltar }) {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function pegarDados() {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:8080/historico?id=${id}`
        );

        if (!response.ok) {
          console.error("Erro ao carregar historico. Status:", response.status);
          return;
        }

        const resultado = await response.json();
        setDados(Array.isArray(resultado) ? resultado[0] : resultado);
      } catch (error) {
        console.error("Erro ao executar requisição", error);
      } finally {
        setLoading(false);
      }
    }

    pegarDados();
  }, [id]);

  return (
    <div onClick={voltar} className="fixed inset-0 bg-black/60 flex items-center justify-center z-10  ">
      <main className="w-200 h-200 bg-fundo rounded-lg overflow-auto custom-scroll">
        <Header
          navigate={voltar}
          icon={ArrowLeft}
          color={"text-traco"}
          text={"Voltar"}
        />

        {loading && (
          <div className="flex justify-center items-center h-full">
            <p className="animate-pulse">Carregando dados...</p>
          </div>
        )}

        {dados && (
          <section className="h-90   border-blue-600 pl-5 pr-5">

            {/* OUTORGANTE */}
            <div className="w-full text-center mb-3">
              <h1 className="text-3xl text-traco font-bold font-[Arial] underline">
                Outorgante
              </h1>
            </div>
            <div className="flex flex-row h-80 ">
              <div className="flex flex-col gap-3 text-xl  h-full w-[50%] break-all">
                <p>
                  <strong className="text-traco">Nome:</strong> {dados.nomeVendedor}
                </p>
                <p><strong className="text-traco">Estado Civil:</strong> {dados.estadoCivilVendedor}</p>
                <p><strong className="text-traco">RG</strong> {dados.rgVendedor}</p>
                <p>
                  <strong className="text-traco">CPF/CNPJ:</strong> {dados.cpf_cnpjVendedor}
                </p>
                <p>
                  <strong className="text-traco">E-mail:</strong> {dados.emailVendedor}
                </p>
                <p>
                  <strong className="text-traco">Endereço:</strong> {dados.enderecoVendedor}
                </p>
              </div>
              <div className="h-full w-[50%]  break-all">
                <p>p</p>
              </div>
            </div>

            {/* OUTORGADO */}
            <div className="w-full text-center mb-3">
              <h1 className="text-3xl text-traco font-bold font-[Arial] underline">
                Outorgado
              </h1>
            </div>
            <div className="flex flex-row h-80 ">
              <div className="flex flex-col gap-3 text-xl  h-full w-[50%] break-all">
                <p>
                  <strong className="text-traco">Nome:</strong> {dados.nome}
                </p>
                <p>
                  <strong className="text-traco">CPF/CNPJ:</strong> {dados.cpf_cnpj}
                </p>
                <p>
                  <strong className="text-traco">Telefone:</strong> {dados.telefone}
                </p>
                <p>
                  <strong className="text-traco">Servico:</strong> {dados.servico}
                </p>
                <p>
                  <strong className="text-traco">Valor:</strong> R${dados.valor_servico}
                </p>
              </div>
              <div className="h-full w-[50%]  break-all">
                <p>..{dados.observacao}</p>
              </div>
            </div>


            {/* VEICULO */}
            <div className="w-full text-center mb-3">
              <h1 className="text-3xl text-traco font-bold font-[Arial] underline">
                Veículo
              </h1>
            </div>
            <div className="flex flex-row h-80 ">
              <div className="flex flex-col gap-3 text-xl  h-full w-[50%] break-all">
                <p>
                  <strong className="text-traco">Modelo:</strong> {dados.modelo}
                </p>
                <p>
                  <strong className="text-traco">Placa:</strong> {dados.placa}
                </p>
                <p>
                  <strong className="text-traco">Ano:</strong> {dados.ano}
                </p>
                
              </div>
              <div className="flex flex-col gap-3 text-xl  h-full w-[50%] break-all">
                <p>
                  <strong className="text-traco">Chassi:</strong> {dados.chassi}
                </p>
                <p>
                  <strong className="text-traco">Cor:</strong> {dados.cor}
                </p>
              </div>
            </div>

          </section>
        )}
      </main>
    </div>
  );
}

export default MostrarUsuario;
