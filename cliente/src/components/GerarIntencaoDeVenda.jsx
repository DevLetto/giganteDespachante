import { apiFetch } from "../services/api";

function GerarIntencaoDeVenda({id, nome}) {

  const normalizarNome = (nome) => {
    return nome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");
  }

  const gerarPdf = async () => {
    try {
      console.log("Gerando Intenção de Venda para o ID: ", id);

      const response = await apiFetch(`/intencaoDeVenda?id=${id}`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Erro do Servidor:", response.status, errorData);
        throw new Error("Erro ao gerar PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const nomeNormalizado = normalizarNome(nome)

      const link = document.createElement("a");
      link.href = url;
      link.download = `intencaoDeVenda_${nomeNormalizado}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div className=" w-max">
      <button onClick={gerarPdf} className=" bg-traco  h-12 rounded-lg w-full text-3xl font-bold p-1 text-white hover:bg-white hover:text-traco transition hover:cursor-pointer">
        Gerar Intenção de Venda
      </button>
    </div>
  );
}

export default GerarIntencaoDeVenda;
