import { ArrowLeft, Bold } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from '../../components/BackBtn'
import CadastroCliente from "./CadastroCliente";

function Cadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServi] = useState("");
  const [valor_servico, setValorServ] = useState("");
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [chassi, setChassi] = useState("");
  const [cor, setCor] = useState("");


  const handleServicoChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const nomeServico = e.target.value;
    setServi(nomeServico);

    const precoServico = selectedOption.dataset.price;
    setValorServ(precoServico);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosCadastro = {
      nome,
      cpf_cnpj,
      telefone,
      servico,
      valor_servico,
      placa,
      modelo,
      ano,
      chassi,
      cor,
    };

    try {
      const response = await fetch("http://localhost:8080/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosCadastro),
      });

      if (response.ok) {
        console.log("Cadastro realizado");
        
        setCadasDone(true)

        setTimeout(() => {
          setCadasDone(false)
          navigate(-1)
          
        }, 2000);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <div className="w-screen h-screen bg-fundo flex  items-center flex-col relative ">
      <header className=" w-screen h-max ">
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft
            size={60}
            className="text-traco hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer"
          />
        </BackButton>
      </header>

      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[70%] h-[80%] justify-between flex flex-col "
      >
        <CadastroCliente 
        nome = {nome}
        setNome = {setNome}
        cpf_cnpj = {cpf_cnpj}
        setCpf = {setCpf}
        telefone = {telefone}
        setTelefone = {setTelefone}
        servico = {servico}
        setServi = {setServi}
        valor_servico = {valor_servico}
        setValorServ = {setValorServ}
        placa = {placa}
        setPlaca = {setPlaca}
        modelo = {setModelo}
        ano = {ano}
        setAno = {setAno}
        chassi = {chassi}
        setChassi = {setChassi}
        cor = {cor}
        setCor = {setCor} 
        onSubmit = {handleSubmit}
        handleServicoChange = {handleServicoChange}
        />
      </form>

      
    </div>
  );
}

export default Cadastrar;
