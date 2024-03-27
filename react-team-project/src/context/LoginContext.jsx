import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        navigate('/dashboard');
        console.log("Utente autenticato con successo");
      } else {
        // Gestisci l'errore di autenticazione qui
        console.error("Credenziali non valide");
      }
    } catch (error) {
      console.error("Errore di rete:", error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <LoginContext.Provider value={[handleInput, handleForm, input, setInput]}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
