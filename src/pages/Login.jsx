import Logo from '../assets/LogoGiganteDespachante.png'

function Login(){
    return(
        <div className='w-screen h-screen bg-fundo flex justify-between gap-35 items-center flex-col p-4 '>
      <img src={Logo} alt="" className='w-[700px] h-[250px]' />

      <form action="post" className='w-[500px] h-[616px]  '>

        <fieldset className='w-full h-[400px] border-2 border-traco flex flex-col items-center p-3 rounded-xl'>

          <img src="" alt="" />
          <div className='w-[90%] h-px bg-traco'></div>
          <label htmlFor="User">Usuário</label>
          <input type="text" name='User' className='' />

        </fieldset>
      </form>
    </div>
    )

}

export default Login;