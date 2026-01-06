import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ArrowLeft } from "lucide-react";
import { apiFetch } from "../services/api";

function Perfil() {

  const navigate = useNavigate()

  const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

  const [usuario, setUsuario] = useState(usuarioLogado?.usuario || "");
  const [senha, setSenha] = useState("");

  async function handleSalvar(e) {
    e.preventDefault();

    const token = localStorage.getItem("token"); 

    const response = await apiFetch("/usuario", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify({ usuario, senha }),
    });

    if (response.ok) {
      const usuarioAtualizado = { ...usuarioLogado, usuario: usuario };
      localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
      alert("Dados atualizados com sucesso!");
    } else {
      alert("Erro ao atualizar dados.");
    }
  }

  return (
    <div className="w-screen h-screen bg-fundo flex 2xl:gap-10 gap-5 items-center flex-col">
      <Header
        navigate={() => navigate("/menu")}
        icon={ArrowLeft}
        color={"text-traco"}
        hover={"text-white"}
        text={"Voltar"}
      />
      <form
        onSubmit={handleSalvar}
        className="bg-white flex flex-col items-center p-3 gap-5 rounded-lg border border-traco shadow-xl"
      >
        <h1 className="text-5xl text-traco font-[Arial]">Perfil</h1>
        <h2 className="text-2xl text-traco font-[Arial]">{usuario}</h2>

        <textfield className="flex flex-col">
          <label className="text-2xl font-[Arial] text-traco" chtmlFor="user">Alterar Nome:</label>
          <input value={usuario} name="User" className="bg-fundo p-1 text-xl rounded-lg" onChange={(e) => setUsuario(e.target.value)} />
        </textfield>

        <textfield className="flex flex-col">
          <label className="text-2xl font-[Arial] text-traco" htmlFor="senha">Alterar Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Nova senha"
            className="bg-fundo p-1 text-xl rounded-lg"
            onChange={(e) => setSenha(e.target.value)}
          />
        </textfield>

        <button className="bg-traco w-[98%] rounded-lg text-white text-2xl hover:bg-white hover:text-traco border border-traco">Salvar</button>
      </form>
    </div>
  );
}

export default Perfil;
