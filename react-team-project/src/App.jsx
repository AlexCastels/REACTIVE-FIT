import { GeneralContainer } from "./components/GeneralContainer";
import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";
import { ComponentContainer } from "./benni-component/ComponentContainer";
import Weight from "./benni-component/Weight";
import { RegistrationInformation } from "./benni-component/RegistrationInformation";
import { Element } from "./components/Element";
import { Sidebar} from "./chiaraRa-components/sidebar";

export function App() {
  return (
    <>
      <GeneralContainer>
        <AsideContainer>
          <Sidebar/>
        </AsideContainer>
        <CentralContainer>
          <Element>
            <Water />
          </Element>
          <Element>
            <Weight />
          </Element>
        </CentralContainer>
        <AsideContainer></AsideContainer>
      </GeneralContainer>
    </>
  );
}
