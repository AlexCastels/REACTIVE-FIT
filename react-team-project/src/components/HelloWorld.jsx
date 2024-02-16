import './HelloWorld.css'

export function HelloWorld(){
    return (

<div class="relative h-screen overflow-hidden bg-indigo-900">
    <img src="/images/landscape/5.svg" class="absolute object-cover w-full h-full"/>
    <div class="absolute inset-0 bg-black opacity-25">
    </div>
    <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container px-6 py-4 mx-auto md:px-12 bg-slate-700">
            <div class="items-center justify-between md:flex">
                <div class="flex items-center justify-between">
                    <a href="#" class="text-white">
                        <svg class="w-8 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
                            <defs>
                            </defs>
                            <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
                            </path>
                            <path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
                            </path>
                        </svg>
                    </a>
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="items-center hidden md:flex">
                    <a class="mx-3 text-lg text-black uppercase cursor-pointer hover:text-gray-300">
                        About us
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Calendar
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Contact us
                    </a>
                </div>
            </div>
        </nav>
    </header>
    <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span class="font-bold text-yellow-400 uppercase">
                Himalaya
            </span>
            <h1 class="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                Let yourself be carried
                <br/>
                    by nature
            </h1>
            <a href="#" class="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Discover
            </a>
        </div>
    </div>
</div>

    )
}