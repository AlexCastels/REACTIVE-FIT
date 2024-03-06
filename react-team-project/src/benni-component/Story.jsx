import { useState } from "react"
import { Element } from "../components/Element"
import { StoryBoard } from "./StoryBoard"

export function Story() {
    const [collapse, setCollapse] = useState(false)
    const handleCollapse =()=>{
        setCollapse(true)
    }
    return (
        <div className="flex bg-slate-600 h-20 w-20 rounded-full " onClick={handleCollapse}>
            {collapse && <>
            <div className="flex absolute top-24 ">
            <Element>
                <StoryBoard/>
            </Element>
            </div>
            </>}
        </div>
    )
}