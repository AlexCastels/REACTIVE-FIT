import { GeneralContainer } from "./components/GeneralContainer";
import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";
import Weight from "./benni-component/Weight";
import { Element } from "./components/Element";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <>
      <GeneralContainer>
        <AsideContainer></AsideContainer>
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
