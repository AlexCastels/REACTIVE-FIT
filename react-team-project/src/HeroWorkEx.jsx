import { WorkList } from "./alex-components/WorkList";
import { Animate } from "./benni-component/Animate";
import { Sidebar } from "./chiaraRa-components/Sidebar";
import { AsideContainer } from "./components/AsideContainer";
import { UserComponents } from "./giusi_components/UserComponents";

export function HeroWorkEx() {
  return (
    <>
      <div className="hero-container">
        <Animate delay={1}>
          <AsideContainer>
            <Sidebar />
          </AsideContainer>
        </Animate>
        <div className="central-container-hero">
          <Animate delay={2}>
            <div className="title-news">
              <p>Exercise Instructions:</p>
            </div>
          </Animate>
          <Animate delay={2}>
            <WorkList />
          </Animate>
        </div>
        <Animate delay={1}>
          <AsideContainer>
            <UserComponents />
          </AsideContainer>
        </Animate>
      </div>
    </>
  );
}
