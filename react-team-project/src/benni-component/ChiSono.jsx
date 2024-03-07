import { Link, Route , Routes } from 'react-router-dom'
import "./registrationinformation.css";

export function ChiSono() {
  return (
    <div className="general-container-reg">
      <div className="form-container-reg">
        <h2>registrati come</h2>
        <select name="type" className="select-reg" id="type">
            <option value="utente">Utente</option>
            <option value="personal-trainer">Professionista</option>
          </select>
          <button id="registrati"><Link className="registrati link" to="./scegli">registrati</Link></button>
      </div>
    </div>
  );
}