import { Atleti } from "../chiaraRa-components/Atleti";
import { Sidebar } from "../chiaraRa-components/Sidebar";
import { AsideContainer } from "../components/AsideContainer";
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
        </div>
    )
}