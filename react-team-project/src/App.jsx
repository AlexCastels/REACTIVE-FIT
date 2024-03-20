import { GeneralContainer } from "./components/GeneralContainer";
import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";
import { ComponentContainer } from "./benni-component/ComponentContainer";
import Weight from "./benni-component/Weight";
import { RegistrationInformation } from "./benni-component/RegistrationInformation";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./chiaraRa-components/Homepage";
import { PageNotFound } from "./chiaraRa-components/PageNotFound";
import { Element } from "./components/Element";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { WeightProvider } from "./context/WeightContext";
import { WaterProvider } from "./context/WaterContext";
import { Story } from "./benni-component/Story";
import { StoryContainer } from "./components/StoryContainer";
import { CounterCalories } from "./alex-components/CounterCalories";
import { RegistrationUser } from "./benni-component/RegistrationUser";
import { UserAccessForm } from "./alex-components/UserAccessForm";
import { Hero } from "./Hero";
import FormAccessoPT from "./Chiarap-components/FormAccessoPT";

import { Atleti } from "./chiaraRa-components/Atleti";

import { UserComponents } from "./giusi_components/UserComponents";
import { HeroCalendar } from "./HeroCalendar";
import { FormUsersSignup } from "./giusi_components/FormUsersSignup";
import { News } from "./chiaraRa-components/News";


export function App() {
  return (
    <>
    <News/>
      {/* <WaterProvider>
        <WeightProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/accedi" element={<UserAccessForm />} />
              <Route path="/iscriviti" element={<FormUsersSignup/>} />
              <Route path="/iscriviti-pt" element={<FormAccessoPT />} />
              <Route path="/dashboard" element={<Hero />} />
              <Route path="/calendario" element={<HeroCalendar/>} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
        </WeightProvider>
      </WaterProvider>  */}
    </>
  );
}
