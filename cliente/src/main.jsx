import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'     
import { createBrowserRouter, RouterProvider } from 'react-router-dom'         
import Login from "./pages/Login"
import Menu from "./pages/Menu.jsx"
import Cadastrar from "./pages/Cadastrar.jsx"
import Pesquisar from "./pages/Pesquisar.jsx"
import NotFound from './pages/NotFound.jsx'

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
