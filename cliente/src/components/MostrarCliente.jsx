import Header from "./Header";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

function MostrarCliente({ id, voltar, novoCadastro }) {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/clientes/${id}`);
        const json = await response.json();
        setDados(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) carregar();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <p className="text-white animate-pulse">Carregando cliente...</p>
      </div>
    );
  }

  if (!dados || !dados.cliente) return null;

  const gerarRelatorio = async () => {
    const response = await fetch(
      `http://localhost:8080/relatorio/cliente/${id}`
    );

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `relatorio_cliente_${id}.pdf`;
    link.click();
  };

  return (
    <div
      onClick={voltar}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-10"
    >
      <main
        onClick={(e) => e.stopPropagation()}
        className="w-200 h-200 bg-fundo rounded-lg overflow-auto custom-scroll flex flex-col"
      >
        <Header
          navigate={voltar}
          icon={ArrowLeft}
          color="text-traco"
          text="Voltar"
        />

        {/* 🔹 NOME */}
        <h1 className="text-4xl text-center font-bold text-traco my-4">
          {dados.cliente?.nome}
        </h1>

        {/* 🔹 VEÍCULOS */}
        <section className="px-5 mb-6">
          <ul className="flex flex-col gap-2">
            {dados?.veiculos?.map((v, i) => (
              <li key={i} className="bg-white rounded-lg p-3 border">
                {v.placa} — {v.modelo} ({v.ano}) - {v.cor}
              </li>
            )) || <p>Nenhum veículo encontrado.</p>}
          </ul>
        </section>

        {/* 🔹 SERVIÇOS */}
        <section className="px-5">
          <h2 className="text-2xl font-bold text-traco mb-2">
            Serviços Realizados
          </h2>

          <ul className="flex flex-col gap-2">
            {dados?.servicos?.map((s) => (
              <li
                key={s.id}
                className="bg-white rounded-lg p-3 flex justify-between"
              >
                <span>
                  {new Date(s.data_emissao).toLocaleDateString("pt-BR")} —{" "}
                  {s.servico} ({s.placa})
                </span>
                <strong>R$ {Number(s.valor_servico).toFixed(2)}</strong>
              </li>
            )) || <p>Nenhum serviço registrado.</p>}
          </ul>
        </section>

        {/* 🔹 AÇÕES */}
        <div className="sticky bottom-0 bg-fundo border-t flex justify-between p-4">
          <button onClick={gerarRelatorio} className="w-full  2xl:h-25 h-15 bg-traco rounded-lg 2xl:text-3xl text-xl text-white  hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center justify-center gap-8">
            Gerar Relatório
          </button>
          
        </div>
      </main>
    </div>
  );
}

export default MostrarCliente;
