import { useState } from "react";
import "./wather.css";

export function Water() {
  const [chose, setChose] = useState();
  const [quantity, setQuantity] = useState(50);
  const [change, setChange] = useState();

  const handleChange = (e) => {
    setChange(Number(e.target.value));
    console.log(change);
  };
  const addWater = (e) => {
    e.preventDefault();
    setQuantity((c) => c + quantity);

  };
  const inlineStyle = {
    height: `${quantity / 30}px`,
    transition: `all 1s ease-in-out`,
  };
 
  const handleChose = (e) => {
    setChose()
    setChose(e.target.id);
    console.log(chose)
  };

  return (
    <>
      <div className="container  rounded-xl m-4 p-4 bg-opacity-30 bg-black ">
        <div className="flex flex-col items-center">
          <h2 className="text-white">bevanda</h2>
          <div className="flex gap-2 text-white p-2">
            <button onClick={handleChose} id="water">
              Acqua
            </button>
            <button onClick={handleChose} id="alcol">
              Alcol
            </button>
            <button onClick={handleChose} id="cofee">
              Caffe'
            </button>
          </div>
        </div>

        <div className="cup">
          <div className={chose}  style={inlineStyle}></div>
        </div>

        <form
          className="flex flex-col text-center justify-center"
          onSubmit={addWater}
        >
          <label htmlFor="custom_size" className="text-white">unita'</label>
          <select name="cSize" id="cSize" onChange={handleChange} className="text-white bg-transparent">
            <option  value="50" >50ml</option>
            <option value="75" >75ml</option>
          </select>
          <button className="m-2  px-4 py-1 bg-slate-950 rounded-lg text-white">
            bevi
          </button>
        </form>
        <div className="flex">
          <p className="text-white">Quantità: {quantity}</p>
        </div>
      </div>
    </>
  );
}
