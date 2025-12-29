import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'         
import PrivateRoute from './components/PrivateRoute.jsx'
import Login from "./pages/Login"
import Menu from "./pages/Menu.jsx"
import Cadastrar from "./pages/Cadastros/Cadastrar.jsx"
import Pesquisar from "./pages/Historico/Pesquisar.jsx"
import NotFound from './pages/NotFound.jsx'
import Relatorio from './pages/Relatorio.jsx'
import Clientes from './pages/HistoricoClientes.jsx/Clientes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/cadastrar",
    element : <Cadastrar />
  },
  {
    path: "/pesquisar",
    element: <Pesquisar />
  },
  {  path: "*",
    element: <NotFound />
  },
  {
    path: "/relatorio",
    element: <Relatorio />
  },
  {
    path: "/clientes",
    element: <Clientes />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
