// import { GeneralContainer } from "./components/GeneralContainer";
// import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";
// import { ComponentContainer } from "./benni-component/ComponentContainer";
// import Weight from "./benni-component/Weight";
import { RegistrationInformation } from "./benni-component/RegistrationInformation";
// import { Element } from "./components/Element";
import { Sidebar} from "./chiaraRa-components/sidebar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Homepage } from "./chiaraRa-components/Homepage";
import { PageNotFound } from "./chiaraRa-components/PageNotFound";



export function App() {
  return (
   <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/dashboard" element={<Sidebar/>}/>
      <Route path="/calendario" element={<Water/>}/>
      <Route path="/notizie" element={<AsideContainer/>}/>
      <Route path="/logout" element={<RegistrationInformation/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
   
  
    </>
  );
}
