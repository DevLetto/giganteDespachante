import { useNavigate } from "react-router-dom";
import Logo from "../assets/LogoGiganteDespachante.png";
import Bolas from "../assets/bolinhas.png";
import { useState } from "react";
import { apiFetch } from "../services/api";

function Login() {
  const [usuario, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [tremer, setTremer] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosLogin = { usuario, senha };

    try {
      const response = await apiFetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosLogin),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));

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
    <div className="w-screen h-screen bg-fundo flex  2xl:gap-35 gap-15 items-center flex-col p-4 ">
      {/* LOGO */}
      <header className=" 2xl:w-2xl 2xl:h-62 w-lg h-40  ">
        <img src={Logo} alt="" className="w-full h-full " />
      </header>

      <form
        onSubmit={handleSubmit}
        action="post"
        className="2xl:w-[400px] 2xl:h-[616px] w-[350px] h-[370px] flex flex-col items-center  2xl:gap-15 gap-10   "
      >
        <fieldset
          className={`w-full 2xl:h-[330px] h-[300px] border-2 ${
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
              className="2xl:text-2xl  text-xl  text-traco text-start
          font-[arial]  "
            >
              Usuário
            </label>
          </div>
          <input
            type="text"
            name="User"
            onChange={(e) => setUser(e.target.value)}
            className="bg-white w-[95%] 2xl:h-10 h-8 rounded-[10px] mb-[50px] p-1 text-traco focus: outline-traco"
            required
          />

          <div className="w-[95%] text-start">
            <label
              htmlFor="Password"
              className="2xl:text-2xl text-xl text-traco text-start font-[arial]"
            >
              Senha
            </label>
          </div>
          <input
            type="password"
            name="Password"
            onChange={(e) => setSenha(e.target.value)}
            className="bg-white w-[95%] 2xl:h-10 h-8 rounded-[10px] p-1 text-traco focus: outline-traco"
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
