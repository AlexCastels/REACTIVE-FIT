import "./centralcontainer.css"
export function CentralContainer({children}) {
    return <div className="flex  w-full central-bg">{children}</div>;
}