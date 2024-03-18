import { useState } from "react";
import { Element } from "../components/Element";
import { StoryBoard } from "./StoryBoard";
import { Animation, Button } from 'rsuite';
export function Story() {


const Panel = React.forwardRef((props, ref) => (
  <div
    {...props}
    ref={ref}
    style={{ background: '#000', width: 100, height: 160, overflow: 'hidden' }}
  >
    <p>Panel</p>
    <p>Content Content Content</p>
  </div>
));
const [show, setShow] = React.useState(true);
const onChange = () => setShow(!show);
  return (
    <div
      className="flex bg-slate-600 h-20 w-20 rounded-full "
      onClick={handleCollapse}
    >
      <div className="flex absolute top-24 ">
        <Element>
            <button onClick={onChange}><StoryBoard /></button>
          
        </Element>
      </div>
    </div>
  );
}
