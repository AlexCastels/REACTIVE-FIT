import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "./chiaraRa-components/PageNotFound";
import { WeightProvider } from "./context/WeightContext";
import { WaterProvider } from "./context/WaterContext";
import { UserAccessForm } from "./alex-components/UserAccessForm";
import { Hero } from "./Hero";
import FormAccessoPT from "./Chiarap-components/FormAccessoPT";
import { HeroCalendar } from "./HeroCalendar";
import { FormUsersSignup } from "./giusi_components/FormUsersSignup";
import { Homepage } from "./chiaraRa-components/Homepage";
import { DashboardPT } from "./alex-components/DashboardPT";
import { HeroNews } from "./HeroNews";
import { HeroWorkEx } from "./HeroWorkEx";
import { LoginProvider } from "./context/LoginContext";
import { PtCalendar } from "./giusi_components/PtCalendar";



export function App() {
  return (
    <>
      <LoginProvider>
        <WaterProvider>
          <WeightProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/accedi" element={<UserAccessForm />} />
              <Route path="/iscriviti" element={<FormUsersSignup />} />
              <Route path="/iscriviti-pt" element={<FormAccessoPT />} />
              <Route path="/dashboard/pt" element={<DashboardPT/>}/>
              <Route path="/dashboard" element={<Hero />} />
              <Route path="/calendario" element={<HeroCalendar />} />
              <Route path="/calendario/pt" element={<PtCalendar/>}/>
              <Route path="/notizie" element={<HeroNews />} />
              <Route path="/workExample" element={<HeroWorkEx />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </WeightProvider>
        </WaterProvider>
      </LoginProvider>
    </>
  );
}
