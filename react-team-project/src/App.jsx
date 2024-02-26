
import { GeneralContainer } from "./components/GeneralContainer";
import { CentralContainer } from "./components/CentralContainer";
import { AsideContainer } from "./components/AsideContainer";
import { Water } from "./benni-component/Water";
import { ComponentContainer } from "./benni-component/ComponentContainer";

export function App() {
	return (
		<>
		<GeneralContainer>
			<AsideContainer></AsideContainer>
			<CentralContainer>
<ComponentContainer>
<Water/>
	</ComponentContainer>			
				
			</CentralContainer>
			<AsideContainer></AsideContainer>
		</GeneralContainer>
			
		</>
	)
}
