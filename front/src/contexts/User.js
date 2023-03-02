import React, { createContext, useState } from "react";

// Cria o contexto de usuário
export const UserContext = createContext();

// Define o provedor de contexto
export const UserProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider
      value={{
        id,
        setId,
        login,
        setLogin,
        senha,
        setSenha,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
