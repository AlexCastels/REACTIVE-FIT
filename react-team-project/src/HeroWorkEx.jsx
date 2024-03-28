import { WorkList } from "./alex-components/WorkList";
import { Animate } from "./benni-component/Animate";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { AsideContainer } from "./components/AsideContainer";
import { UserComponents } from "./giusi_components/UserComponents";

export function HeroWorkEx() {
  return (
    <>
      <div className="hero-container">
    
          <AsideContainer>
            <Sidebar />
          </AsideContainer>
      
        <div className="central-container-hero">
          <Animate delay={1}>
            <div className="title-news">
              <p>Exercise Instructions:</p>
            </div>
          </Animate>
          <Animate delay={1}>
            <WorkList />
          </Animate>
        </div>
       
          <AsideContainer>
            <UserComponents />
          </AsideContainer>
      
      </div>
    </>
  );
}
