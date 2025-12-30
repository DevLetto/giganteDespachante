import { useState } from "react";

function Perfil() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

  const [usuario, setUsuario] = useState(usuarioLogado.usuario);
  const [senha, setSenha] = useState("");

  async function handleSalvar(e) {
    e.preventDefault();

    await fetch("http://localhost:8080/usuario", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, senha }),
    });

    alert("Dados atualizados");
  }

  return (
    <form onSubmit={handleSalvar}>
      <h1>Perfil</h1>

      <input value={usuario} onChange={e => setUsuario(e.target.value)} />
      <input type="password" placeholder="Nova senha" onChange={e => setSenha(e.target.value)} />

      <button>Salvar</button>
    </form>
  );
}

export default Perfil;
