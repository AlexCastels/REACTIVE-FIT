import { useState } from "react";
import { collapse } from "@material-tailwind/react";
import { ButtonComponent } from "../style-site/ButtonComponent";
import { ModalComp } from "../giusi_components/ModalComp";
import { ModalCompAlim } from "../giusi_components/ModalCompAlim";
import "../benni-component/resusercomp.css"
import { CalendarPage } from "../benni-component/CalendarPage";

export function AsideComponRespo() {
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
            <div className="flex flex-col anim bg-black overflow-hidden" onClick={() => {
                collapse();
            }}
                style={{ height: isCollapse ? "400px" : "120px" }}>
                <div className="bg-black pt-4 flex justify-center items-center">
                    <div className="responsive-user-component-dx flex gap-3">
                        <div className="">
                            <img src="\src\style-site\images-style\AVATAR PT.png" alt="aji" className=" w-20 h-20 object-cover rounded-2xl" />
                        </div>
                        
                            <div className="grid-cols-1">
                                <div className="p-4 relative bg-transparent border border-gray-800 shadow-lg w-20 rounded-2xl">
                                    <div className="text-2xl text-gray-100 font-medium leading-8">5</div>
                                    <div className="text-sm text-gray-500">Clients</div>
                                </div>
                            </div>
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg w-20 rounded-2xl">
                                    <div className="flex justify-between items-center ">
                                        <i className="fab fa-behance text-xl text-gray-400"></i>
                                    </div>
                                    <div className="text-2xl text-gray-100 font-medium leading-8">8.5</div>
                                    <div className="text-sm text-gray-500">Reviews</div>
                                </div>
                            </div>
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg w-20 rounded-2xl">
                                    <div className="flex justify-between items-center ">
                                        <i className="fab fa-codepen text-xl text-gray-400"></i>
                                    </div>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 ">52</div>
                                    <div className="text-sm text-gray-500">Goals</div>
                                </div>
                            </div>
                            <div className="text-3xl cursor-pointer pl-5 flex items-center justify-center">
                                {isCollapse ? <ion-icon name="caret-down-outline"></ion-icon> : <ion-icon name="caret-up-outline"></ion-icon>}
                            </div>
                        </div>
                    
                </div>
                <div className="p-4 flex flex-col gap-1">
                    <div><h3 className="text-xl font-bold py-4 text-gray-200 text-center">UPCOMING EVENTS</h3></div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col p-4 bg-transparent border border-gray-800 shadow-md hover:text-yellow-400 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center mr-auto">
                                    <div className="flex flex-col ml-3 min-w-0">
                                        <div className="flex flex-col">
                                            <h2 className="font-medium leading-none text-gray-100">Wednesday 3 March | Hour: 17:00 </h2>
                                            <p className="text-sm text-gray-300 leading-none mt-1 truncate">CHECK PT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-3 min-w-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col p-4 bg-transparent border border-gray-800 shadow-md hover:text-yellow-400 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center mr-auto">
                                    <div className="flex flex-col ml-3 min-w-0">
                                        <div className="flex flex-col">
                                            <h2 className="font-medium leading-none text-gray-100">Wednesday 3 March | Hour: 17:00 </h2>
                                            <p className="text-sm text-gray-300 leading-none mt-1 truncate">CHECK PT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-3 min-w-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col p-4 bg-transparent border border-gray-800 shadow-md hover:text-yellow-400 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center mr-auto">
                                    <div className="flex flex-col ml-3 min-w-0">
                                        <div className="flex flex-col">
                                            <h2 className="font-medium leading-none text-gray-100">Wednesday 3 March | Hour: 17:00 </h2>
                                            <p className="text-sm text-gray-300 leading-none mt-1 truncate">CHECK PT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-3 min-w-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
