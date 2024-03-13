import { useState } from "react";
import { Days } from "./Days";

export function Calendar() {
  const [task, getTask] = useState([]);
  const [input, setInput] =useState('')
  
  return <div className="flex">
    <form >
      <input type="text" placeholder="Aggiungi un task" />
    <button>aggiungiu un task</button>
    </form>
    
    {task.map((day)=>{
      <Days key={task.id}  day={day}/>;
    })}
  </div>;
}
