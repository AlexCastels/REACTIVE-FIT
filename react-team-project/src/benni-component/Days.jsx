export function Days({ task}) {
    const dataOdierna  = new Date().toLocaleDateString();
    return(
        <div className="flex-col">
            <div className="flex">
                <div className="">{dataOdierna}</div>
            <div className="flex">{task}</div>
            </div>
           
        </div>
    )
}