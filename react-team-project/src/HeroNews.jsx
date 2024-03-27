import { Animate } from "./benni-component/Animate";
import { News } from "./chiaraRa-components/News";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { AsideContainer } from "./components/AsideContainer";
import { UserComponents } from "./giusi_components/UserComponents";
import './hero.css'

export function HeroNews(){
    return (
        
            <div className="hero-container">
                <Animate delay={1}>
                <AsideContainer>
                <Sidebar />
            </AsideContainer>
                </Animate>
            
            <div className="central-container-hero">
                <div className="title-news">
                    <p>News:</p>
                </div>
                <Animate delay={2}>
                <News/>
                </Animate>

                
            </div>
            <Animate delay={1}>
            <AsideContainer>
                <UserComponents />
            </AsideContainer>
            </Animate>
        </div>
            
            
    )
}