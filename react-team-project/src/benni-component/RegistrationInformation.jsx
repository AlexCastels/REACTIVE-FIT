
import "./registrationinformation.css";
import { Link, Route , Routes } from 'react-router-dom'
export function RegistrationInformation() {
  return (
    <div className="general-container-reg">
      <div className="form-container-reg">
        <h2>Registrati</h2>
        <div className="google">
          <button id="google-button">
            {" "}
            <img
              src="https://589e284d7a76520f38b73caca5874fb7.cdn.bubble.io/f1667470880060x460128447972340200/Google%20Logo.svg"
              alt=""
            />
            continua con google
          </button>
        </div>
        <button id="registrati"><Link className="registrati link" to="./scegli/reg">registrati</Link> </button>
        <div
          class="fb-login-button"
          data-width="400px"
          data-size=""
          data-button-type=""
          data-layout=""
          data-auto-logout-link="false"
          data-use-continue-as="true"
        ></div>
        <div className="text-yellow-500">
          <h5>
            oppure <a href=""><Link className="registrati link" to="./scegli/useraccess">accedi</Link></a>
          </h5>
        </div>
      </div>
    </div>
  );
}
