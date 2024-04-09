import { Link } from "react-router-dom";
import { DashboardPT } from "../alex-components/DashboardPT";
import { PtCalendar } from "./PtCalendar";
import { Homepage } from "../chiaraRa-components/Homepage";



export function SidebarPt() {


  return(
    <>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div className="sidebarContainer bg-black p-4">
  <div className="sidebarDivContainer">
    <div className="sidebarH1Logo">
      <img src="/src/style-site/images-style/reactiveLogo-Photoroom.png-Photoroom.png" />
    </div>
    <ul className="sidebarUl">
      <li>
        <Link to="/dashboard/pt" style={{ textDecoration: 'none' }} className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<DashboardPT/>}>
          <span className="sideIcon"><i className="bx bx-home"></i></span>
          <span className="sidebarPag text-gray-200  hover:text-yellow-400 ">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/calendario/pt" style={{ textDecoration: 'none' }} className="sidebarElenco bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4 transition ease-in duration-500  transform hover:scale-105" element={<PtCalendar/>}>
          <span className="sideIcon"><i className="bx bx-calendar"></i></span>
          <span className="sidebarPag text-gray-200  hover:text-yellow-400">Calendario</span>
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
</>
  )
}