
import { useWater } from "../context/WaterContext";
import "./wather.css";

export function Water() {
 const [quantity, addWater]=useWater()
  const inlineStyle = {
    height: `${quantity}px`,
    transition: `all 1s ease-in-out`,
  };

  return (
    <>
      <div className="container w-80 flex flex-col items-center justify-center bg-transparent border-hidden m-5 p-3">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-yellow-400">Acqua</h2>
          <div className="flex gap-2 text-yellow-500 p-2"></div>
        </div>

        <div className="cup border-yellow-900">
          <div className="water" style={inlineStyle} ></div>
        </div>

        <button className="bg-yellow-400 hover:bg-transparent h-9 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium hover:text-gray-50 text-slate-950 rounded-md transition ease-in duration-700 max-w-40 m-4" onClick={addWater}>
          Bevi
        </button>

        <div className="flex">
          <p className="text-yellow-400">Quantità: {quantity}</p>
        </div>
      </div>
    </>
  );
}
