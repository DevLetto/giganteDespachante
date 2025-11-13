import {User} from "lucide-react"
import Logo from '../assets/LogoGiganteDespachante.png'


function Menu(){
    return(
        <div className='w-screen h-screen bg-fundo flex justify-between gap-35 items-center flex-col p-4 '>
            <header>
                <img src={Logo} alt="" />
               <User /> 
            </header>
            <main>

            </main>
          </div>
    )

} 

export default Menu;