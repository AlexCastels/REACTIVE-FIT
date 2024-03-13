export function Days({day, task}) {
    return(
        <div className="flex">
            <div className="">{day}</div>
            <div className="flex">{task}</div>
        </div>
    )
}