
export function ButtonComponent({text , onClick}){
    return (<button onClick={onClick} className="bg-yellow-400 hover:bg-transparent h-9 px-5 m-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium hover:text-gray-50 text-slate-950 rounded-md transition ease-in duration-700 max-w-40 ">{text}</button>)
}