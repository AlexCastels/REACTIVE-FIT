
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { HeroCalendar } from '../HeroCalendar';
import { HeroWorkEx } from '../HeroWorkEx';
import { HeroNews } from '../HeroNews';
import { Homepage } from '../chiaraRa-components/Homepage';
import { Link } from 'react-router-dom';

export function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>

            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div style={{ display: isOpen ? "inline" : "none" }}>

                <div className="sidebarContainer bg-black bg-opacity-70 p-4">
                    <div className="sidebarDivContainer">
                        <div className="sidebarH1Logo">
                            <img src="/src/style-site/images-style/reactiveLogo-Photoroom.png-Photoroom.png" />
                        </div>
                        <ul className="sidebarUl">
                            <li>
                                <Link to="/dashboard" style={{ textDecoration: 'none' }} className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105 ">
                                    <span className="sideIcon"><i className="bx bx-home"></i></span>
                                    <span className="sidebarPag text-gray-200  hover:text-yellow-400">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/calendario" style={{ textDecoration: 'none' }} className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<HeroCalendar />}>
                                    <span className="sideIcon"><i className="bx bx-calendar"></i></span>
                                    <span className="sidebarPag text-gray-200  hover:text-yellow-400">Calendario</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/workExample" style={{ textDecoration: 'none' }} className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<HeroWorkEx/>}>
                                    <span className="sideIcon"><ion-icon name="barbell-outline"></ion-icon></span>
                                    <span className="sidebarPag text-gray-200  hover:text-yellow-400">Exercises</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/notizie" style={{ textDecoration: 'none' }} className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<HeroNews/>}>
                                    <span className="sideIcon"><i className="bx bx-news"></i></span>
                                    <span className="sidebarPag text-gray-200  hover:text-yellow-400">Notizie</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" style={{ textDecoration: 'none' }} className="sidebarLogout" element={<Homepage/>}>
                                    <span className="sideIcon"><i className="bx bx-log-out"></i></span>
                                    <span className="sidebarPag text-gray-200  hover:text-yellow-400">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>

    )


}