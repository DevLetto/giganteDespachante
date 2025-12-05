import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CadastroCliente from "./CadastroCliente";
import CadastroVendedor from "./cadastroVendedor";
import { useEffect } from "react";
import CadastroDone from "../../components/CadastroDone";

function Cadastrar() {

  const [step, setStep] = useState(1)
  const [cadasDone, setCadasDone] = useState(false)

  const navigate = useNavigate();

  // States do cliente
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

  // States do Vendedor
  const [nomeVendedor, setNomeVendedor] = useState('')
  const [cpf_cnpjVendedor, setCpfVendedor] = useState('')
  const [emailVendedor, setEmailVendedor] = useState('')
  const [enderecoVendedor, setEnderecoVendedor] = useState('')



const isFormValid = nomeVendedor && cpf_cnpjVendedor && emailVendedor && enderecoVendedor
  

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosCadastro = {
      
      nomeVendedor,
      cpf_cnpjVendedor,
      emailVendedor,
      enderecoVendedor,
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
        console.log("Saindo...")
        setCadasDone(true)
        

        setTimeout(() => {
          navigate('/menu')


          
        }, 2000);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; // desativa scroll na página

    return () => {
      document.body.style.overflow = "auto"; // volta ao normal ao sair do componente
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-fundo flex  items-center flex-col relative ">
      
      
 
      <form
        onSubmit={handleSubmit}
        action=""
      >

        {step === 1 &&(
          <CadastroVendedor
            nome = {nomeVendedor}
            setNome = {setNomeVendedor}
            cpf_cnpj={cpf_cnpjVendedor}
            setCpf={setCpfVendedor}
            email={emailVendedor}
            setEmail={setEmailVendedor}
            endereco={enderecoVendedor}
            setEndereco={setEnderecoVendedor}
            onNext={() => setStep(2)}
            isFormValid ={isFormValid}


          />
        )}

        {step === 2 &&(
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
            modelo = {modelo}
            setModelo = {setModelo}
            ano = {ano}
            setAno = {setAno}
            chassi = {chassi}
            setChassi = {setChassi}
            cor = {cor}
            setCor = {setCor} 
            onSubmit = {handleSubmit}
            onPrev={() => setStep(1)}
          />
        )}

        {cadasDone && <CadastroDone/>}

        


      </form>

      
    </div>
  );
}

export default Cadastrar;
