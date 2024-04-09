
import { Animate } from "../benni-component/Animate";
import { CalendarPage } from "../benni-component/CalendarPage";
import { Sidebar } from "../chiaraRa-components/Sidebar";
import { AsideContainer } from "../components/AsideContainer";
import { AsideContainerDx } from "../components/AsideContainerDx";
import { AsideComponRespo } from "./AsideComponRespo";
import { AsidePtComponent } from "./AsidePtComponent";
import { HamburgerMenuPt } from "./HamburgerMenuPt";
import { SidebarPt } from "./SidebarPt";
import { UserComponents } from "./UserComponents";


export function PtCalendar() {
    return (
        <div className="hero-container">
            <AsideContainer>
                <SidebarPt />
            </AsideContainer>
            <AsideContainerDx>
                <HamburgerMenuPt />
            </AsideContainerDx>
            <div className="central-container-hero">
                <div className="title-calendar">
                    <p>Calendario:</p>
                </div>
                <Animate delay={1}>
                    <CalendarPage />
                </Animate>
            </div>
            <AsideContainer>
                <AsidePtComponent/>
            </AsideContainer>
            <AsideContainerDx>
                <AsideComponRespo />
            </AsideContainerDx>
        </div>
    );
}
