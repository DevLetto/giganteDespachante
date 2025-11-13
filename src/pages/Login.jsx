import { useNavigate } from 'react-router-dom';
import Logo from '../assets/LogoGiganteDespachante.png'
import Bolas from '../assets/bolinhas.png'

function Login(){

  const navigate = useNavigate()

  function onSubmitClick(){
    navigate('/menu')
  }

  return(
      <div className='w-screen h-screen bg-fundo flex justify-between gap-35 items-center flex-col p-4 '>
    <img src={Logo} alt="" className='w-[700px] h-[250px]' />

    <form action="post" className='w-[400px] h-[616px] flex flex-col items-center  gap-15'>

      <fieldset className='w-full h-[330px] border-2 border-traco flex flex-col items-center pt-5 pl-1 pr-1 rounded-lg shadow-2xl'>

        <div className='w-[98%] flex items-start mb-[5px]'>
          <img src={Bolas} alt="Tres bolinhas" className='w-[85px]'/>
        </div>
        <div className='w-[98%] h-px bg-traco mb-[15px]'></div>

        <div className='w-[95%] text-start'>
          <label htmlFor="User" className='text-2xl text-traco text-start
          font-[arial]  '>Usuário</label>
        </div>
        <input type="text" name='User' className='bg-white w-[95%] h-10 rounded-[10px] mb-[50px] p-1 text-traco focus: outline-traco' required />



        <div className='w-[95%] text-start'>
          <label htmlFor="Password" className='text-2xl text-traco text-start font-[arial]'>Senha</label>
        </div>
        <input type="password" name="Password" className='bg-white w-[95%] h-10 rounded-[10px] p-1 text-traco focus: outline-traco' required/>

      </fieldset>

      <button onClick={onSubmitClick} className='bg-white w-[210px] h-11 text-traco text-2xl rounded-[10px] hover:bg-traco hover:text-white '>
          
          Entrar

      </button>

      

    </form>
  </div>
  )

}

export default Login;