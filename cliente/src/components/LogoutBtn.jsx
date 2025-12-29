import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

function LogoutBtn() {
  
  const navigate = useNavigate()  

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return <button onClick={logout} className="w-25 h-15 bg-white text-red-700 hover:bg-red-600 hover:text-white text-2xl rounded-lg flex flex-row justify-center items-center gap-3"> <LogOut size={30} /> Sair</button>;
}

export default LogoutBtn;
