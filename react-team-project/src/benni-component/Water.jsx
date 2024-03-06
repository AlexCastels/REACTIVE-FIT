
import { useWater } from "../context/WaterContext";
import "./wather.css";

export function Water() {
 const [quantity, addWater]=useWater()
  const inlineStyle = {
    height: `${quantity/20}px`,
    transition: `all 1s ease-in-out`,
  };

  return (
    <>
      <div className="container ">
        <div className="flex flex-col items-center">
          <h2 className="text-yellow-500">Acqua</h2>
          <div className="flex gap-2 text-yellow-500 p-2"></div>
        </div>

        <div className="cup border-yellow-900">
          <div className="water" style={inlineStyle} ></div>
        </div>

        <button className="m-2  px-4 py-1 bg-slate-950 rounded-lg text-yellow-500" onClick={addWater}>
          bevi
        </button>

        <div className="flex">
          <p className="text-yellow-500">Quantità: {quantity}</p>
        </div>
      </div>
    </>
  );
}
