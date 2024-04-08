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
            <div className="flex flex-col anim bg-black;" onClick={() => {
                collapse();
            }}
                style={{ height: isCollapse ? "400px" : "100px" }}>
                <div className="bg-black">
                    <div
                        className="responsive-user-component-dx "

                    >
                        <div className=" ">
                            <img src="\src\style-site\images-style\AVATAR FIT.png" alt="aji" className=" w-20 h-20 object-cover rounded-2xl" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  absolute bottom-4 right-1 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    <div className="text-2xl text-gray-100 font-medium leading-8">85</div>
                                    <div className="text-sm text-gray-500">Balancy</div>
                                </div>
                            </div>
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3  absolute bottom-4 right-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <div className="flex justify-between items-center ">
                                        {/* <i className="fab fa-behance text-xl text-gray-400"></i> */}
                                    </div>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 ">87</div>
                                    <div className="text-sm text-gray-500">Progress</div>
                                </div>
                            </div>
                            <div className="grid-cols-1">
                                <div className="p-4   relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex justify-between items-center ">
                                        {/* <i className="fab fa-codepen text-xl text-gray-400"></i> */}
                                    </div>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 ">60</div>
                                    <div className="text-sm text-gray-500 ">Goals</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center gap-1 bg-black">
                    <div className="workout-responsive">
                        <div className="text-center p-5 flex-auto justify-center">
                            <h2 className="text-xl font-bold py-4 text-gray-200">Workout</h2>
                        </div>
                        <div className=" text-center space-x-4 md:block">
                            <ButtonComponent text='Open' />
                        </div>
                    </div>
                    <div className="workout-responsive">
                        <div className="text-center p-5 flex-auto justify-center">
                            <h2 className="text-xl font-bold py-4 text-gray-200">Power Board</h2>
                        </div>
                        <div className=" text-center space-x-4 md:block">
                            <ButtonComponent text='Open' />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 ">
                    <div className="grid-cols-1">
                        <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                            <img src="src/giusi_components/images/ODJGGF0-removebg-preview.png" className="h-10 w-10  absolute bottom-4 right-3" alt="" />
                            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">52</div>
                            <div className="text-sm text-gray-500">Weight</div>
                        </div>
                    </div>
                    <div className="grid-cols-1">
                        <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                            <img src="src/giusi_components/images/DJV JUL 2349-12-Photoroom.png-Photoroom.png" className="className=h-10 w-10  absolute bottom-4 right-3" />
                            <div className="flex justify-between items-center ">
                                <i className="fab fa-behance text-xl text-gray-400"></i>
                            </div>
                            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">163</div>
                            <div className="text-sm text-gray-500">Height</div>
                        </div>
                    </div>
                    <div className="grid-cols-1">
                        <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="flex justify-between items-center ">
                                <i className="fab fa-codepen text-xl text-gray-400"></i>
                            </div>
                            <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">28</div>
                            <div className="text-sm text-gray-500">Years</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
