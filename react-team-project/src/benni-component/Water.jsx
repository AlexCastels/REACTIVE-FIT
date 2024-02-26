
import { useState } from "react";
import "./wather.css";


export function Water() {
  const [cup, setCup] = useState(null);

  const inlineStyle = {
    height: `${cup}px`,
    transition: `all 1s ease-in-out`,
  };

  function handleFill() {
    setCup((c) => c + 10);
    console.log(cup);
    createWave();
  }
  function createWave() {
    const water = document.querySelector(".water");
    water.classList.remove("wave-animation");
    setTimeout(() => {
      water.classList.add("wave-animation");
    }, 10);
  }

  return (
    <>
      <div className="container">
        <div className="cup">
          <div className="water" style={inlineStyle}></div>
        </div>
        <button onClick={handleFill}>riempi</button>
      </div>
    </>
  );
}
