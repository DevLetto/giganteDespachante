import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom"; 
import PrivateRoute from "./components/PrivateRoute.jsx";
import Login from "./pages/Login";
import Menu from "./pages/Menu.jsx";
import Cadastrar from "./pages/Cadastros/Cadastrar.jsx";
import Pesquisar from "./pages/Historico/Pesquisar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Relatorio from "./pages/Relatorio.jsx";
import Clientes from "./pages/HistoricoClientes.jsx/Clientes.jsx";
import Perfil from "./pages/Perfil.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/menu",
    element: (
      <PrivateRoute>
        <Menu />
      </PrivateRoute>
    ),
  },
  {
    path: "/cadastrar",
    element: (
      <PrivateRoute>
        <Cadastrar />
      </PrivateRoute>
    ),
  },
  {
    path: "/pesquisar",
    element: (
      <PrivateRoute>
        <Pesquisar />
      </PrivateRoute>
    ),
  },
  {
    path: "/clientes",
    element: (
      <PrivateRoute>
        <Clientes />
      </PrivateRoute>
    ),
  },
  {
    path: "/relatorio",
    element: (
      <PrivateRoute>
        <Relatorio />
      </PrivateRoute>
    ),
  },
  {
    path: "/perfil",
    element: (
      <PrivateRoute>
        <Perfil />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);