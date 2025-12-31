import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const saved = localStorage.getItem("usuario");
    return saved ? JSON.parse(saved) : null;
  });

  function login(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(user));
    setUsuario(user);
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
