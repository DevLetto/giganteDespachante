import { useState } from "react";

const MESES = [
  { num: 1, nome: "Janeiro" },
  { num: 2, nome: "Fevereiro" },
  { num: 3, nome: "Março" },
  { num: 4, nome: "Abril" },
  { num: 5, nome: "Maio" },
  { num: 6, nome: "Junho" },
  { num: 7, nome: "Julho" },
  { num: 8, nome: "Agosto" },
  { num: 9, nome: "Setembro" },
  { num: 10, nome: "Outubro" },
  { num: 11, nome: "Novembro" },
  { num: 12, nome: "Dezembro" },
];

export default function FiltroRelatorio({ value, onChange }) {
  const hoje = new Date();
  const mesAtual = hoje.getMonth() + 1;
  const anoAtual = hoje.getFullYear();

  function toggleMes(mes) {
    const meses = value.meses.includes(mes)
      ? value.meses.filter(m => m !== mes)
      : [...value.meses, mes];

    onChange({ ...value, meses });
  }

  return (
    <div className="bg-fundo p-6 rounded-xl">
      <h2 className="text-lg font-bold mb-4">Filtro</h2>

      {/* ANO */}
      <label className="block mb-2 font-semibold">Ano</label>
      <select
        value={value.ano}
        onChange={e =>
          onChange({ ...value, ano: Number(e.target.value) })
        }
        className="w-full p-2 rounded border mb-4"
      >
        {[anoAtual, anoAtual - 1, anoAtual - 2].map(a => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      {/* MESES */}
      <div className="grid grid-cols-2 gap-2">
        {MESES.map(mes => {
          const desabilitado =
            value.ano === anoAtual && mes.num === mesAtual;

          return (
            <label
              key={mes.num}
              className={`flex items-center gap-2 p-2 rounded
                ${desabilitado
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100 cursor-pointer"}
              `}
            >
              <input
                type="checkbox"
                disabled={desabilitado}
                checked={value.meses.includes(mes.num)}
                onChange={() => toggleMes(mes.num)}
              />
              {mes.nome}
            </label>
          );
        })}
      </div>
    </div>
  );
}
