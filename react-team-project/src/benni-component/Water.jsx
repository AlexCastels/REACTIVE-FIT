import { useState } from "react";
import "./wather.css";

export function Water() {
  const [cup, setCup] = useState(null);
  const [quantity, setQuantity] = useState(50)
  const [change, setChange] = useState()
  const handleChange = (e) =>{
    setChange(Number(e.target.value))
    console.log(change)
  }
  const  addWater= (e)=>{
    e.preventDefault()
    setQuantity((c)=> c + quantity)
    createWave()
    
  }
  const inlineStyle = {
    height: `${cup}px`,
    transition: `all 1s ease-in-out`,
  };
  function createWave() {
    const water = document.querySelector(".water");
    water.classList.remove("wave-animation");
    setTimeout(() => {
      water.classList.add("wave-animation");
    }, 10);
  }
  const handleChose =  (e) =>{

  }

  return (
    <>
      <div className="container border-y-green-900 rounded-xl m-4 bg-opacity-30 bg-black ">
        <div className="flex flex-col items-center">
          <h2>bevanda</h2>
          <div className="flex gap-2 ">
            <button onClick={handleChose}>Acqua</button>
            <button>Alcol</button>
            <button>Caffe'</button>
          </div>
        </div>
       
        <div className="cup">
          <div className="water" style={inlineStyle}></div>
        </div>
        
        <form className="flex flex-col text-center justify-center" onSubmit={addWater}>
          <label htmlFor="custom_size">unita'</label>
          <select name="cSize" id="cSize" onChange={handleChange}>
            <option value="50">50ml</option>
            <option value="75">75ml</option>
            
          </select>
          <button className="m-2  px-4 py-1 bg-slate-950 rounded-lg text-white">bevi</button>
         
        </form>
      </div>
    </>
  );
}
