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
import { UserComponents } from "./giusi_components/UserComponents";
import './hero.css'

export function Hero() {
  	return (
    	 <div className="hero-container">
			
      		<AsideContainer>
        		 <Sidebar />
      		</AsideContainer>
      		<div className="central-container-hero">
        		 <div className="central-container-hero-left">
          			<Element>
						<CounterCalories />
					</Element>
        		 </div>
        		 <div className="central-container-hero-rigth">
          			<div className="central-container-hero-rigth-top">
						<WorkoutAndSleep />
					</div>
          			<div className="central-container-hero-rigth-bot">
						<div className="weight-component">
							<Element>
								<Weight />
							</Element>
						</div>
						<div className="water-component">
							<Element>
								<Water />
							</Element>
						</div>
					</div>
        		 </div>
      		</div>
			
      		<AsideContainer>
        		 <UserComponents/>
      		</AsideContainer>
    	 </div>
  	);
}
