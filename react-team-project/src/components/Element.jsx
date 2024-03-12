export function Element({children}) {
    return <div className="rounded-xl border-2 border-gray-800 z-10  backdrop-blur-50"> 
    {children}
    </div>
}