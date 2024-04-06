import { UserComponentResponsive } from "../benni-component/UserComponentResponsive";
import { Atleti } from "../chiaraRa-components/Atleti";
import { Sidebar } from "../chiaraRa-components/Sidebar";
import { AsideContainer } from "../components/AsideContainer";
import { AsideContainerDx } from "../components/AsideContainerDx";
import { AsidePtComponent } from "../giusi_components/AsidePtComponent";
import './dashboardPT.css'

export function DashboardPT(){
    return (
        <div className="hero-container">
            <AsideContainer>
                <Sidebar/>
            </AsideContainer> 
            <div className="central-container-hero">
                <div className="PT-title">
                    <p>Benvenuto, Allenatore!</p>
                    <p>I tuoi Atleti:</p>
                </div>
                <Atleti/>
            </div>
            <AsideContainer>
                <AsidePtComponent/>
            </AsideContainer> 
            <AsideContainerDx>
                <UserComponentResponsive />
            </AsideContainerDx>
        </div>
    )
}