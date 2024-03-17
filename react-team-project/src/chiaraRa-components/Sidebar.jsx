import { HeroCalendar } from '../HeroCalendar';
import { Calendar } from '../benni-component/Calendar';
import { Homepage } from './Homepage';
import './sidebar.css';
import { Link } from 'react-router-dom';


export function Sidebar() {


  return(
    <>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div className="sidebarContainer">
  <div className="sidebarDivContainer">
    <div className="sidebarH1Logo">
      <i className='bx bx-dumbbell'></i>
      <h1 className="sideText">FITNESS REACT</h1>
    </div>
    <ul className="sidebarUl">
      <li>
        <Link to="/dashboard" className="sidebarElenco">
          <span className="sideIcon"><i className="bx bx-home"></i></span>
          <span className="sidebarPag">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/calendario" className="sidebarElenco" element={<HeroCalendar/>}>
          <span className="sideIcon"><i className="bx bx-calendar"></i></span>
          <span className="sidebarPag">Calendario</span>
        </Link>
      </li>
      <li>
        <Link to="/notizie" className="sidebarElenco">
          <span className="sideIcon"><i className="bx bx-news"></i></span>
          <span className="sidebarPag">Notizie</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="sidebarLogout" element={<Homepage/>}>
          <span className="sideIcon"><i className="bx bx-log-out"></i></span>
          <span className="sidebarPag">Logout</span>
        </Link>
      </li>
    </ul>
  </div>
</div>
</>
  )
}