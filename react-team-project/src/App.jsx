import { GeneralContainer } from "./components/GeneralContainer";
import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";
import { Element } from "./components/Element";
import { Sidebar } from "./chiaraRa-components/sidebar";
import { WeightProvider } from "./context/WeightContext";
import Weight from "./benni-component/Weight";
import { WaterProvider } from "./context/WaterContext";
import { Story } from "./benni-component/Story";
import { StoryContainer } from "./components/StoryContainer";


export function App() {
  return (
    <>
      <WaterProvider>
        <WeightProvider>
          <GeneralContainer>
            
            <AsideContainer>
              <Sidebar />
            </AsideContainer>
            <CentralContainer>
              <StoryContainer>
              <Story/>
              <Story/>
              <Story/>
              </StoryContainer>
            
              <Element>
                <Water />
              </Element>
              <Element>
                <Weight />
              </Element>
            </CentralContainer>
            <AsideContainer></AsideContainer>
            
          </GeneralContainer>

        </WeightProvider>
      </WaterProvider>
    </>
  );
}
