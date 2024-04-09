import { UserComponentResponsive } from "../benni-component/UserComponentResponsive";
import { Atleti } from "../chiaraRa-components/Atleti";
import { Sidebar } from "../chiaraRa-components/Sidebar";
import { AsideContainer } from "../components/AsideContainer";
import { AsideContainerDx } from "../components/AsideContainerDx";
import { AsideComponRespo } from "../giusi_components/AsideComponRespo";
import { AsidePtComponent } from "../giusi_components/AsidePtComponent";
import { HamburgerMenu } from "../giusi_components/HamburgerMenu";
import { HamburgerMenuPt } from "../giusi_components/HamburgerMenuPt";
import { SidebarPt } from "../giusi_components/SidebarPt";
import './dashboardPT.css'

export function DashboardPT() {
    return (
        <div className="hero-container">
            <AsideContainer>
                <SidebarPt />
            </AsideContainer>
            <AsideContainerDx>
                <HamburgerMenuPt />
            </AsideContainerDx>
            <div className="central-container-hero">
                <div className="PT-title">
                    <p>Benvenuto, Allenatore!</p>
                    <p>I tuoi Atleti:</p>
                </div>
                <Atleti />
            </div>
            <AsideContainer>
                <AsidePtComponent />
            </AsideContainer>
            <AsideContainerDx>
                <AsideComponRespo />
            </AsideContainerDx>
        </div>
    )
}