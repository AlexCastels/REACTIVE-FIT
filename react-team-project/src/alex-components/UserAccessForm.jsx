import { useState } from "react";
import "./userAccessForm.css";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../style-site/ButtonComponent";
import { FormUsersSignup } from "../giusi_components/FormUsersSignup";
import { useLogin } from "../context/LoginContext";

export function UserAccessForm() {
  const [handleInput, handleForm, input, setInput] = useLogin();
  return (
    <div className="container-form-homepage">
      <div className="general-container">
        <form onSubmit={handleForm} className="form-container">
          <h3 className="h5-form">Accedi con le tue credenziali</h3>
          <div className="input">
            <label htmlFor="email"> E-mail</label>
            <input
              className="inputForm"
              type="text"
              onChange={handleInput}
              name="username"
              value={input.username}
            />
          </div>
          <div className="input">
            <label htmlFor="password"> Password</label>
            <input
              className="inputForm"
              type="text"
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
