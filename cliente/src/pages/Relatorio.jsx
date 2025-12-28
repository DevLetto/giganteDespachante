import { useState } from "react";
import GerarRelatorio from "../components/gerarRelatorio";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";



const mesesLista = [
  { id: 1, nome: "Janeiro" },
  { id: 2, nome: "Fevereiro" },
  { id: 3, nome: "Março" },
  { id: 4, nome: "Abril" },
  { id: 5, nome: "Maio" },
  { id: 6, nome: "Junho" },
  { id: 7, nome: "Julho" },
  { id: 8, nome: "Agosto" },
  { id: 9, nome: "Setembro" },
  { id: 10, nome: "Outubro" },
  { id: 11, nome: "Novembro" },
  { id: 12, nome: "Dezembro" },
];

export default function Relatorio() {
  const navigate = useNavigate()  
  const [meses, setMeses] = useState([]);
  const [ano, setAno] = useState(new Date().getFullYear());

  function toggleMes(mes) {
    setMeses((prev) =>
      prev.includes(mes) ? prev.filter((m) => m !== mes) : [...prev, mes]
    );
  }

  return (
    <div className="w-screen h-screen bg-fundo flex  items-center flex-col">
      <header className="w-full">
        <Header
          navigate={() => navigate("/menu")}
          icon={ArrowLeft}
          color={"text-traco"}
          hover={"text-white"}
          text={"Voltar"}
        />
      </header>
      <div className="flex flex-col 2xl:gap-20 gap-8 text-center">
          <h1 className="text-traco 2xl:text-6xl text-5xl font-[Arial] font-bold">Relatório Mensal</h1>

          <div className="bg-white  border-2 border-traco rounded-lg flex items-center flex-col gap-5 h-75 p-5">
              <div className="w-full h-max font-[Arial] text-traco text-xl text-center">Escolha o mês</div>
              <div className="grid grid-cols-4 gap-3">
                {mesesLista.map((m) => (
                  <label key={m.id} className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={meses.includes(m.id)}
                      className="accent-traco peer hover:cursor-pointer"
                      onChange={() => toggleMes(m.id)}
                    />
                    {m.nome}
                  </label>
                ))}
              </div>
              <div className="w-full h-max font-[Arial] text-traco text-xl text-center">Escolha o ano</div>
              <input
                type="number"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                className="border-2 border-traco rounded-lg text-center text-traco p-2 w-32"
              />
          </div>
          <div className="w-full flex justify-center">
              <GerarRelatorio meses={meses} ano={ano} />
          </div>
      </div>
    </div>
  );
}
