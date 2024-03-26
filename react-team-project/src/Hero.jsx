import WorkoutAndSleep from "./Chiarap-components/WorkandSleep";
import { CounterCalories } from "./alex-components/CounterCalories";
import { Story } from "./benni-component/Story";
import { Water } from "./benni-component/Water";
import Weight from "./benni-component/Weight";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { AsideContainer } from "./components/AsideContainer";
import { CentralContainer } from "./components/CentralContainer";
import { Element } from "./components/Element";
import { StoryContainer } from "./components/StoryContainer";
import { AsidePtComponent } from "./giusi_components/AsidePtComponent";
import { UserComponents } from "./giusi_components/UserComponents";
import "./hero.css";

export function Hero() {
    return (
        <div className="hero-container">
            <AsideContainer>
                <Sidebar />
            </AsideContainer>
            <div className="central-container-hero">
                <div className='title-general-hero'>
                    <p>Dashboard Utente</p>
                </div>
                <div className="title-counter-sleep">
                    <p>Sleep and work Counter</p>
                    <div className="counter-sleep-style">
                        <WorkoutAndSleep />
                    </div>
                </div>
                <div className="title-contakcal">
                    <p>Kcal Counter</p>
                    <div>
                        <Element>
                            <CounterCalories />
                        </Element>
                    </div>
                </div>
                <div className="title-weight-water">
                    <p>Progression</p>
                    <div className='weight-water-style'>
                        <Element>
                            <Weight />
                        </Element>
                        <Element>
                            <Water />
                        </Element>
                    </div>
                </div>
                
            
                {/* <div className="central-container-hero-left">
                    <Element>
                        <CounterCalories />
                    </Element>
                </div>
                <div className="central-container-hero-rigth">
                    <div className="central-container-hero-rigth-top">
                        <WorkoutAndSleep />
                    </div>
                    <div className="central-container-hero-rigth-bot">
                        <div className="weight-component">
                            <Element>
                                <Weight />
                            </Element>
                        </div>
                        <div className="water-component">
                            <Element>
                                <Water />
                            </Element>
                        </div>
                    </div>
                </div> */}
            </div>
            <AsideContainer>
                <UserComponents />
                {/* <AsidePtComponent/> */}
            </AsideContainer>
        </div>
    );
}
