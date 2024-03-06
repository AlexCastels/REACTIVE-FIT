import { GeneralContainer } from "./components/GeneralContainer";
import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";

import { ComponentContainer } from "./benni-component/ComponentContainer";
import Weight from "./benni-component/Weight";
import { RegistrationInformation } from "./benni-component/RegistrationInformation";
import {  Routes, Route} from "react-router-dom";
import { Homepage } from "./chiaraRa-components/Homepage";
import { PageNotFound } from "./chiaraRa-components/PageNotFound";
import { Element } from "./components/Element";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { WeightProvider } from "./context/WeightContext";

import { WaterProvider } from "./context/WaterContext";
import { Story } from "./benni-component/Story";
import { StoryContainer } from "./components/StoryContainer";
import { CounterCalories } from "./alex-components/CounterCalories"



export function App() {
  return (

   
  <>
    
 
       <WaterProvider>
        <WeightProvider>
          <GeneralContainer>
          <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/dashboard" element={<Sidebar/>}/>
      <Route path="/calendario" element={<Water/>}/>
      <Route path="/notizie" element={<AsideContainer/>}/>
      <Route path="/logout" element={<RegistrationInformation/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
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
              <Element>
                
              </Element>
            </CentralContainer>
            <AsideContainer></AsideContainer>
            
          </GeneralContainer>

        </WeightProvider>
      </WaterProvider> 
    </>

  );
}
