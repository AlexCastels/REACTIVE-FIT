import { WorkList } from "./alex-components/WorkList";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { AsideContainer } from "./components/AsideContainer";
import { UserComponents } from "./giusi_components/UserComponents";

export function HeroWorkEx(){
    return (
        <>
            <div className="hero-container">
            <AsideContainer>
                <Sidebar />
            </AsideContainer>
            <div className="central-container-hero">
                <div className="title-news">
                    <p>Exercise Instructions:</p>
                </div>
                <WorkList/>
            </div>
            <AsideContainer>
                <UserComponents />
            </AsideContainer>
        </div>
        </>
    )
}