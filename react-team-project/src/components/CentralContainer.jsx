import "./centralcontainer.css"
export function CentralContainer({children}) {
    return <div className="flex  w-full central-bg flex-col">{children}</div>;
}