import { CalendarPage } from "../benni-component/CalendarPage"
import { ButtonComponent } from "../style-site/ButtonComponent"
import "./userComponents.css"
import "../style-site/calendarPt.css"
import "../benni-component/CalendarPage.css"

export function AsidePtComponent() {

    return (
        <>
            {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/> */}
            <div className="flex flex-col items-center min-h-screen bg-black overflow-y-scroll overflow-x-hidden h-screen user-components">
                <div className=" m-4">
                    <div className="max-w-xl w-full mx-auto grid gap-4 grid-cols-1">
                        <div className="flex top-0 z-10 justify-center">
                            <div className="bg-transparent border border-gray-800 shadow-lg rounded-2xl p-4">
                                <div className="flex-none sm:flex">
                                    <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                                        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="aji" className=" w-32 h-32 object-cover rounded-2xl" />
                                        <a href="#" className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-orange-600 hover:bg-orange-400 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-2 w-2">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="flex-auto sm:ml-5 justify-evenly">
                                        <div className="flex items-center justify-between sm:mt-2">
                                            <div className="flex items-center">
                                                <div className="flex flex-col">
                                                    <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">Name Surname</div>
                                                    <div className="flex-auto text-gray-400 my-1">
                                                        <span className="mr-3 ">example@email.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 ">
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9  absolute bottom-4 right-3 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">5</div>
                                    <div className="text-sm text-gray-500">Clients</div>
                                </div>
                            </div>
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8  absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <div className="flex justify-between items-center ">
                                        <i className="fab fa-behance text-xl text-gray-400"></i>
                                    </div>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">8.5</div>
                                    <div className="text-sm text-gray-500">Reviews</div>
                                </div>
                            </div>
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9  absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex justify-between items-center ">
                                        <i className="fab fa-codepen text-xl text-gray-400"></i>
                                    </div>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">52</div>
                                    <div className="text-sm text-gray-500">Goals</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1">

                        <div className="flex flex-col p-4 relative items-center justify-center bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                <div className="">
                                   <CalendarPage/>
                                </div>
                            </div>
                        </div>
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
            </div>
        </>
    )
}