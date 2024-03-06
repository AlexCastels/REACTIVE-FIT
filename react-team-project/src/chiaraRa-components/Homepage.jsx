import "./Homepage.css";
import { Link } from "react-router-dom";
export function Homepage() {
  return (
    <>
      <div className="Homepage">
        <img
          src="https://www.topdoctors.it/files/Image/large/5fab072507ae38c144aa575236a3cd3d.png"
          className="homeImg"
        />
        <div className="homeContainer">
          <div className="homeDivText">
            <h1 className="homeH1">Fitness React</h1>
            <span className="homeSpan">
              Ti aiuta a connetterti e restare in contatto con il tuo personal
              trainer
            </span>
          </div>
          <div className="HomeBtn">
            <button className="HomeAccedi hometwobtn">Accedi</button>
            <p className="homeBtnPara">
              Sei un personal trainer?{" "}
              <Link to="/personal-trainer">Accedi qui</Link>
            </p>
            <button className="HomeIscriviti hometwobtn">Iscriviti</button>
          </div>
        </div>
      </div>
    </>
  );
}
