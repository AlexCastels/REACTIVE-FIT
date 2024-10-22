import WorkoutAndSleep from "./Chiarap-components/WorkandSleep";
import { CounterCalories } from "./alex-components/CounterCalories";
import { Animate } from "./benni-component/Animate";
import { AnimateFlip } from "./benni-component/AnimateFlip";
import { Story } from "./benni-component/Story";
import { UserComponentResponsive } from "./benni-component/UserComponentResponsive";
import { Water } from "./benni-component/Water";
import Weight from "./benni-component/Weight";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { AsideContainer } from "./components/AsideContainer";
import { AsideContainerDx } from "./components/AsideContainerDx";
import { CentralContainer } from "./components/CentralContainer";
import { Element } from "./components/Element";
import { StoryContainer } from "./components/StoryContainer";
import { AsidePtComponent } from "./giusi_components/AsidePtComponent";
import { DataToday } from "./giusi_components/DataToday";
import { HamburgerMenu } from "./giusi_components/HamburgerMenu";
import { UserComponents } from "./giusi_components/UserComponents";
import "./hero.css";

export function Hero() {
  return (
    <div className="hero-container ">
      <AsideContainer>
        <Sidebar />
      </AsideContainer>
      <AsideContainerDx>
        <HamburgerMenu/>
      </AsideContainerDx>
      <div className="central-container-hero">
        <Animate delay={1}>
          <div className="title-general-hero font-normal">
            <p className="tracking-wide">Benvenuto, Utente!</p>
            <DataToday/>
          </div>
        </Animate>
        <Animate delay={1}>
          <div className="title-counter-sleep">
            <p className="font-light text-white tracking-wide">Sleep and work Counter</p>
            <div className="counter-sleep-style">
              <WorkoutAndSleep />
            </div>
          </div>
        </Animate>
        <Animate delay={1}>
          <div className="title-contakcal">
            <p className="font-light text-white tracking-wide">Kcal Counter</p>
            <div>
              <Element>
                <CounterCalories />
              </Element>
            </div>
          </div>
        </Animate>
        <Animate delay={1}>
          <div className="title-weight-water">
            <p className="font-light text-white tracking-wide">Progression</p>
            <div className="weight-water-style">
              <Element>
                <Weight />
              </Element>
              <Animate delay={1}>
                <Element>
                  <Water />
                </Element>
              </Animate>
            </div>
          </div>
        </Animate>
      </div>
      <AsideContainer>
        <UserComponents />
      </AsideContainer>
      <AsideContainerDx>
        <UserComponentResponsive />
      </AsideContainerDx>
    </div>
  );
}
