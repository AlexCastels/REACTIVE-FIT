export function UserComponents() {

    return (
        <>
            {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/> */}
            <div className="flex flex-col items-center min-h-screen bg-black overflow-y-scroll h-screen">
                <div className=" m-4">
                    <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
                        <div className="flex top-0 z-10 justify-center">
                            <div className="bg-transparent border border-gray-800 shadow-lg  rounded-2xl p-4">
                                <div className="flex-none sm:flex">
                                    <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                                        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="aji" className=" w-32 h-32 object-cover rounded-2xl" />
                                        <a href="#" className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-orange-600 hover:bg-orange-400 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  absolute bottom-4 right-3 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">85</div>
                                    <div className="text-sm text-gray-500">Balancy</div>
                                </div>
                            </div>
                            <div className="grid-cols-1">
                                <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <div className="flex justify-between items-center ">
                                        <i className="fab fa-behance text-xl text-gray-400"></i>
                                    </div>
                                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">87</div>
                                    <div className="text-sm text-gray-500">Progress</div>
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
                                    <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">60</div>
                                    <div className="text-sm text-gray-500">Goals</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1">


                            <div className="flex flex-col p-4 relative items-center justify-center bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                <div className="">
                                    <img src="src/giusi_components/images/8475477-removebg-preview.png" width={150} />
                                    <div className="text-center p-5 flex-auto justify-center">
                                        <h2 className="text-xl font-bold py-4 text-gray-200">Workout</h2>
                                    </div>
                                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                                        <button className="bg-orange-600 hover:bg-orange-400 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-orange-500 hover:border-orange-400 text-white rounded-full transition ease-in duration-300">Open</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col p-4 relative items-center justify-center bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                <div className="">
                                    <img src="src/giusi_components/images/6186244-removebg-preview.png" width={150} />
                                    <div className="text-center p-5 flex-auto justify-center">
                                        <h2 className="text-xl font-bold py-4 text-gray-200">Power Board</h2>
                                    </div>
                                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                                        <button className="bg-orange-600 hover:bg-orange-400 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-orange-500 hover:border-orange-400 text-white rounded-full transition ease-in duration-300">Open</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col p-4 bg-transparent border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center mr-auto">
                                            <div className="flex flex-col ml-3 min-w-0">
                                                <img src="src/giusi_components/images/Kerfin7_NEA_2543-removebg-preview.png" width={100} />
                                                <div className="flex flex-col text-center">
                                                    <h2 className="font-medium leading-none text-gray-100">My Personal Trainer</h2>
                                                    <p className="text-sm text-gray-500 leading-none mt-1 truncate">example@email.com</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center p-14">
                                                <div className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-yellow-400">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                                        </path>
                                                    </svg>
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

                            <div className="grid grid-cols-3 gap-4 ">
                                <div className="grid-cols-1">
                                    <div className="p-4 relative  bg-transparent border border-gray-800 shadow-lg  rounded-2xl">
                                        <img src="src/giusi_components/images/ODJGGF0-removebg-preview.png" className="h-12 w-12  absolute bottom-4 right-3" alt="" />
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
                        <div><h3 className="text-xl font-bold py-4 text-gray-200 text-center">UPCOMING EVENTS</h3></div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col p-4 bg-transparent border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
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
                            <div className="flex flex-col p-4 bg-transparent border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
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
                            <div className="flex flex-col p-4 bg-transparent border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
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