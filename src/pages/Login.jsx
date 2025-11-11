import Logo from '../assets/LogoGiganteDespachante.png'

function Login(){
    return(
        <div className='w-screen h-screen bg-fundo flex justify-between gap-35 items-center flex-col p-4 '>
      <img src={Logo} alt="" className='w-[700px] h-[250px]' />

      <form action="post" className='w-[450px] h-[616px] flex flex-col items-center  gap-15'>

        <fieldset className='w-full h-[400px] border-2 border-traco flex flex-col items-center p-3 rounded-xl'>

          <img src="" alt="" />
          <div className='w-[98%] h-px bg-traco'></div>

          <label htmlFor="User">Usuário</label>
          <input type="text" name='User' className='bg-white w-[95%] h-10 rounded-[10px]' />

          <label htmlFor="Password">Senha</label>
          <input type="password" name="Password" className='bg-white w-[95%] h-10 rounded-[10px]' />

        </fieldset>

        <button className='bg-white w-[250px] h-10 text-traco text-2xl rounded-[10px]'>
            
            Entrar

        </button>

      </form>
    </div>
    )

}

export default Login;