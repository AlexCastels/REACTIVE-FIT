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
        {/* <header className="homeHeader">
        <nav className="homeNav">
            <div className="homeNavDiv">
                <div class="flex items-center justify-between">
                    <a href="#" class="text-white">
                        <svg className="homeSvg" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
                            <defs>
                            </defs>
                            <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
                            </path>
                            <path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
                            </path>
                        </svg>
                    </a>
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="items-center hidden md:flex">
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        About us
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Calendar
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Contact us
                    </a>
                </div>
            </div>
        </nav>
        </header> */}
        <div class="homeContainer">
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