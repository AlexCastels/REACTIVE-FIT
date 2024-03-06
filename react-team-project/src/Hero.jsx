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

export function Hero() {
  return (
    <>
      <AsideContainer>
        <Sidebar />
      </AsideContainer>
      <CentralContainer>
        <StoryContainer>
          <Story />
          <Story />
          <Story />
        </StoryContainer>

        <Element>
          <Water />
        </Element>
        <Element>
          <WorkoutAndSleep />
        </Element>
        <Element>
          <Weight />
        </Element>
        <Element>
          <CounterCalories />
        </Element>
      </CentralContainer>
      <AsideContainer></AsideContainer>
    </>
  );
}
