import { Cross as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import { Homepage } from '../chiaraRa-components/Homepage';
import { HeroCalendar } from '../HeroCalendar';
import { News } from '../chiaraRa-components/News';
import { useState } from 'react';

export function HamburgerMenu(){
    const [isOpen, setOpen] = useState(false);
    const [isCollapse, setIsCollapse] = useState(false);
    const collapse = () => {
        if (!isCollapse) {
            setIsCollapse(true);
        } else {
            setIsCollapse(false);
        }
    };
    return(
        <>
            <Hamburger toggled={isCollapse} toggle={setIsCollapse}/>
            <div className="flex flex-col anim gap-3 bg-black" onClick={() => {collapse()}}
                style={{ width: isCollapse ? "250px" : "0px" }}
                >
                {/* <div className="sidebarContainer">
                    <div className="sidebarDivContainer">
                        <div className="sidebarH1Logo">
                        <img src="/src/style-site/images-style/reactiveLogo-Photoroom.png-Photoroom.png" />
                        </div>
                        <ul className="sidebarUl">
                        <li>
                            <Link to="/dashboard" className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105 ">
                            <span className="sideIcon"><i className="bx bx-home"></i></span>
                            <span className="sidebarPag text-gray-200  hover:text-yellow-400">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/calendario" className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<HeroCalendar/>}>
                            <span className="sideIcon"><i className="bx bx-calendar"></i></span>
                            <span className="sidebarPag text-gray-200  hover:text-yellow-400">Calendario</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/workExample" className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<News/>}>
                            <span className="sideIcon"><ion-icon name="barbell-outline"></ion-icon></span>
                            <span className="sidebarPag text-gray-200  hover:text-yellow-400">Exercises</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/notizie" className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<News/>}>
                            <span className="sideIcon"><i className="bx bx-news"></i></span>
                            <span className="sidebarPag text-gray-200  hover:text-yellow-400">Notizie</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="sidebarLogout" element={<Homepage/>}>
                            <span className="sideIcon"><i className="bx bx-log-out"></i></span>
                            <span className="sidebarPag text-gray-200  hover:text-yellow-400">Logout</span>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    )   
}