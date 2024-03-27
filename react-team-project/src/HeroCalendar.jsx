import { CalendarPage } from "./benni-component/CalendarPage";
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
import { UserComponents } from "./giusi_components/UserComponents";
import "./hero.css";
import { Animate } from "./benni-component/Animate";

export function HeroCalendar() {
  return (
    <div className="hero-container">
      <Animate delay={1}>
      <AsideContainer>
        <Sidebar />
      </AsideContainer>
      </Animate>
      <div className="central-container-hero">
        <Animate delay={2}>
        <div className="title-calendar">
          <p>Calendario:</p>
        </div>
        </Animate>
        <Animate delay={2}>
        <CalendarPage />
          </Animate>
      </div>
      <Animate delay={1}>
      <AsideContainer>
        <UserComponents />
      </AsideContainer>
      </Animate>
    </div>
  );
}
