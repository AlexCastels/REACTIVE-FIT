import { Link } from "react-router-dom"
export function PageNotFound() {
    return (
      <>

        <main class="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div class="bg-yellow-400 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
              <a
                class="relative inline-block text-sm font-medium text-yellow-400 group active:text-yellow-400 focus:outline-none focus:ring"
              >
                <span
                  class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-yellow-400 group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>
        
                <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <Link to="/">Go Home</Link>
                </span>
              </a>
            </button>
        </main>
        </>
    )
}