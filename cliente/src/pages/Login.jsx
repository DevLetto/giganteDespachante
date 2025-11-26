import { useNavigate } from "react-router-dom";
import Logo from "../assets/LogoGiganteDespachante.png";
import Bolas from "../assets/bolinhas.png";
import { useState } from "react";
// import axios from "axios";

function Login() {
  const [usuario, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [tremer, setTremer] = useState(false);

  const navigate = useNavigate();

  // function onSubmitClick() {
  //   navigate("/menu");
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosLogin = { usuario, senha };

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosLogin),
      });

      if (response.ok) {
        navigate("/menu");
      } else {
        setErro(true);
        setTremer(true);

        setTimeout(() => {
          setErro(false);
          setTremer(false);
        }, 2000);
      }
    } catch (error) {
      console.error("erro na requisição", error);
    }
  };

  return (
    <div className="w-screen h-screen bg-fundo flex justify-between gap-35 items-center flex-col p-4 ">
      <img src={Logo} alt="" className="w-[700px] h-[250px]" />

      <form
        onSubmit={handleSubmit}
        action="post"
        className="w-[400px] h-[616px] flex flex-col items-center  gap-15"
      >
        <fieldset
          className={`w-full h-[330px] border-2 ${
            erro ? "border-red-600 " : "border-traco"
          } ${
            tremer ? "shake" : ""
          } flex flex-col items-center pt-5 pl-1 pr-1 rounded-lg shadow-2xl transition`}
        >
          <div className="w-[98%] flex items-start mb-[5px]">
            <img src={Bolas} alt="Tres bolinhas" className="w-[85px]" />
          </div>
          <div className="w-[98%] h-px bg-traco mb-[15px]"></div>

          <div className="w-[95%] text-start">
            <label
              htmlFor="User"
              className="text-2xl text-traco text-start
          font-[arial]  "
            >
              Usuário
            </label>
          </div>
          <input
            type="text"
            name="User"
            onChange={(e) => setUser(e.target.value)}
            className="bg-white w-[95%] h-10 rounded-[10px] mb-[50px] p-1 text-traco focus: outline-traco"
            required
          />

          <div className="w-[95%] text-start">
            <label
              htmlFor="Password"
              className="text-2xl text-traco text-start font-[arial]"
            >
              Senha
            </label>
          </div>
          <input
            type="password"
            name="Password"
            onChange={(e) => setSenha(e.target.value)}
            className="bg-white w-[95%] h-10 rounded-[10px] p-1 text-traco focus: outline-traco"
            required
          />
        </fieldset>

        <button
          className={`${
            erro
              ? "bg-red-600 text-white hover:bg-red-600 after:content-['Usuario ou senha Invalidos'] "
              : "bg-white text-traco hover:bg-traco"
          }  ${
            tremer ? "shake" : ""
          } w-[210px] h-11  text-2xl rounded-[10px]  hover:cursor-pointer hover:text-white `}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
