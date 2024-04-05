import { useState } from "react";
import "./resusercomp.css";
import { collapse } from "@material-tailwind/react";
import { ButtonComponent } from "../style-site/ButtonComponent";
export function UserComponentResponsive() {
  const [isCollapse, setIsCollapse] = useState(false);
  const collapse = () => {
    if (!isCollapse) {
      setIsCollapse(true);
    } else {
      setIsCollapse(false);
    }
  };
  return (
    <>
     <div className="flex flex-col anim gap-3" onClick={() => {
            collapse();
          }}
          style={{ height: isCollapse ? "400px" : "100px" }}>
     <div className="">
        <div
          className="responsive-user-component-dx"
          
        >
          <div className="flex ">
            <div className="p-4 relative   bg-transparent border border-gray-800 shadow-lg  rounded-2xl ">
              <div className="text-2xl text-gray-100  leading-8 mt-5">85</div>
              <div className="text-sm text-gray-500">Balancy</div>
            </div>
          </div>
          <div className="">
            <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
              <div className="flex justify-between items-center ">
                <i className="fab fa-behance text-xl text-gray-400"></i>
              </div>
              <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                87
              </div>
              <div className="text-sm text-gray-500">Progress</div>
            </div>
          </div>
          <div className="grid-cols-1">
            <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
              <div className="flex justify-between items-center ">
                <i className="fab fa-codepen text-xl text-gray-400"></i>
              </div>
              <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                60
              </div>
              <div className="text-sm text-gray-500">Goals</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3">
      <div className="workout-responsive">
        <h2>workout</h2>
        <ButtonComponent text={"Open"} />
      </div>
      <div className="workout-responsive">
        <h2>Power Board</h2>
        <ButtonComponent text={"Open"} />
      </div>
      <div className="workout-responsive">
        <h2>My Personal Trainer</h2>
        <ButtonComponent text={"Open"} />
      </div>
      </div>
      <div className="flex justify-center gap-3">
      <div className="flex ">
            <div className="p-4 relative   bg-transparent border border-gray-800 shadow-lg  rounded-2xl ">
              <div className="text-2xl text-gray-100  leading-8 mt-5">76</div>
              <div className="text-sm text-gray-500">Weght</div>
            </div>
          </div>
          <div className="">
            <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
              <div className="flex justify-between items-center ">
                <i className="fab fa-behance text-xl text-gray-400"></i>
              </div>
              <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
               1.70
              </div>
              <div className="text-sm text-gray-500">Heigh</div>
            </div>
          </div>
          <div className="grid-cols-1">
            <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
              <div className="flex justify-between items-center ">
                <i className="fab fa-codepen text-xl text-gray-400"></i>
              </div>
              <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                28
              </div>
              <div className="text-sm text-gray-500">Years</div>
            </div>
          </div>
      </div>
 
     </div>
    </>
  );
}
