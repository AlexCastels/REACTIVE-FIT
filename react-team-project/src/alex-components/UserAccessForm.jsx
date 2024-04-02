import { useState } from "react";
import "./userAccessForm.css";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../style-site/ButtonComponent";
import { FormUsersSignup } from "../giusi_components/FormUsersSignup";
import { useLogin } from "../context/LoginContext";
import { HeartIcon } from "@heroicons/react/24/solid";

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
              type="password"
              onChange={handleInput}
              name="password"
              value={input.password}
            />
          </div>
          <div className="container-buttons-form">
            <Link to={"/dashboard"} ><button
              type="submit"
              className="bg-yellow-400 hover:bg-transparent h-9 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium hover:text-gray-50 text-slate-950 rounded-md transition ease-in duration-700 max-w-40"
            >
              
              Invia
            </button></Link>
            <Link to={"/iscriviti"} element={<FormUsersSignup />}>
              <ButtonComponent text={"Sign-up"} />
            </Link>
          </div>
          <div className="container-button-pt">
            <h5>Sei un Personal Trainer?</h5>
            <div className="container-button-pt-iscriviti">
              <Link to="/dashboard/pt">
                <ButtonComponent text={"Accedi"} />
              </Link>
              <Link style={{ textDecoration: "none" }} to="#">
                <p className="container-button-pt-iscriviti-link">
                  o iscriviti
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
