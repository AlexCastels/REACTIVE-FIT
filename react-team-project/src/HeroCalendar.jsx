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

export function HeroCalendar() {
  return (
    <div className="hero-container">
      <AsideContainer>
        <Sidebar />
      </AsideContainer>
      <div className="central-container-hero">
        <div className="title-calendar">
          <p>Calendario:</p>
        </div>
        <CalendarPage />
      </div>
      <AsideContainer>
        <UserComponents />
      </AsideContainer>
    </div>
  );
}
