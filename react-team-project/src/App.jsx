import { GeneralContainer } from "./components/GeneralContainer";
import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";
import { ComponentContainer } from "./benni-component/ComponentContainer";
import Weight from "./benni-component/Weight";

export function App() {
  return (
    <>
      <GeneralContainer>
        <AsideContainer></AsideContainer>
        <CentralContainer>
         <div className="flex flex-col">
		 <Water />
          <Weight />
		 </div>
        </CentralContainer>
        <AsideContainer></AsideContainer>
      </GeneralContainer>
    </>
  );
}
