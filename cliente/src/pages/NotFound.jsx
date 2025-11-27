import BackButton from "../components/BackBtn";
import {ArrowLeft} from 'lucide-react'
import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate()

    return(
        <div className="w-screen h-screen  bg-fundo flex  flex-col items-center">
            <header className=" w-screen h-96 ">
                <BackButton onClick={() => navigate('/menu')}>
                <ArrowLeft
                    size={60}
                    className="text-traco hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer"
                />
                </BackButton>
            </header>
            <h1 className="text-8xl text-traco font-[Arial]">Not Found</h1>
        </div>
    )
}

export default NotFound;