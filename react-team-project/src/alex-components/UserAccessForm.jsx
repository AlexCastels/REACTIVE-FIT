import { useState } from "react";
import "./userAccessForm.css";
import { Link, useHistory } from "react-router-dom";
import { ButtonComponent } from "../style-site/ButtonComponent";
import { FormUsersSignup } from "../giusi_components/FormUsersSignup";

export function UserAccessForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

let history = useHistory();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
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
        console.log("Utente autenticato con successo");
        // Reindirizza l'utente a una pagina diversa dopo il login
        history.push("/dashboard");
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
    <div className="container-form-homepage">
      <div className="general-container">
        <form onSubmit={handleForm} className="form-container">
          <h3 className="h5-form">Accedi con le tue credenziali</h3>
          <div className="input">
            <label htmlFor="email"> E-mail</label>
            <input
              className="inputForm"
              type="email"
              onChange={handleInput}
              name="email"
              value={input.email}
            />
          </div>
          <div className="input">
            <label htmlFor="password"> Password</label>
            <input
              className="inputForm"
              type="password"
              onChange={handleInput}
              name="password"
              value={input.password}
            />
          </div>
          <div className="container-buttons-form">
            <button type="submit">Invia</button>
            <Link to={"/iscriviti"} element={<FormUsersSignup />}>
              <ButtonComponent text={"Sign-up"} />
            </Link>
          </div>
          <div className="container-button-pt">
            <h5>Sei un Personal Trainer?</h5>
            <div className="container-button-pt-iscriviti">
              <ButtonComponent text={"Accedi"} />
              <p>o iscriviti</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
