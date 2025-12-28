function GerarRelatorio() {


  const gerarPdf = async () => {
    try {
      console.log("Gerando Relatorio");

      const response = await fetch(`http://localhost:8080/relatorio`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Erro do Servidor:", response.status, errorData);
        throw new Error("Erro ao gerar PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `relatorio.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div className="  w-[90%]">
      <button
        onClick={gerarPdf}
        className=" w-max 2xl:h-25 h-20 bg-traco rounded-lg 2xl:text-3xl text-xl text-white hover:bg-white hover:text-traco font-bold font-[Arial]  transition hover:cursor-pointer flex items-center pl-5 gap-8"
      >
        Gerar Relatorio
      </button>
    </div>
  );
}

export default GerarRelatorio;
