import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(
    localStorage.getItem("usuario")
  );

  function login(token, usuario) {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", usuario);
    setUsuario(usuario);
  }

  function logout() {
    localStorage.clear();
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
