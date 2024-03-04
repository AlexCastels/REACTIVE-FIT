import './sidebar.css';
export function Sidebar() {
  return(
    <>
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div className="sidebarContainer">
  <div className="sidebarDivContainer">
    <div className="sidebarH1Logo">
      <i class='bx bx-dumbbell'></i>
      <h1 className="sideText">FITNESS REACT</h1>
    </div>
    <ul class="sidebarUl">
      <li>
        <a href="#" class="sidebarElenco">
          <span class="sideIcon"><i class="bx bx-home"></i></span>
          <span class="sidebarPag">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#" class="sidebarElenco">
          <span class="sideIcon"><i class="bx bx-calendar"></i></span>
          <span class="sidebarPag">Calendario</span>
        </a>
      </li>
      <li>
        <a href="#" class="sidebarElenco">
          <span class="sideIcon"><i class="bx bx-news"></i></span>
          <span class="sidebarPag">Notizie</span>
        </a>
      </li>
      <li>
        <a href="#" class="sidebarLogout">
          <span class="sideIcon"><i class="bx bx-log-out"></i></span>
          <span class="sidebarPag">Logout</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</>
  )
}