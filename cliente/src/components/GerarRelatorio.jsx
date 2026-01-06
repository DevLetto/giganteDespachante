import { apiFetch } from "../services/api";

function GerarRelatorio({ meses, ano }) {
  async function gerarPdf() {
    if (!meses.length) {
      alert("Selecione ao menos um mês");
      return;
    }

    const query = `meses=${meses.join(",")}&ano=${ano}`;

    const response = await apiFetch(`/relatorio?${query}`);

    if (!response.ok) {
      const erro = await response.json();
      alert(erro.error);
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "relatorio.pdf";
    link.click();
  }

  return (
    <div className="  w-[90%]">
      <button
        onClick={gerarPdf}
        className=" w-full  2xl:h-25 h-15 bg-traco rounded-lg 2xl:text-3xl text-xl text-white  hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center justify-center gap-8"
      >
        Gerar Relatorio
      </button>
    </div>
  );
}

export default GerarRelatorio;
