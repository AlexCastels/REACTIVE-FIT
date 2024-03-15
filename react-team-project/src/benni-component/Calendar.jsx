import { useState } from "react";
import { Days } from "./Days";

export function Calendar() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleTask = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, input]);
    setInput('')
  };

  return (
    <div className="flex-col">
      <form onSubmit={handleTask}>
        <input
          type="text"
          placeholder="Aggiungi un task"
          onChange={handleInput}
          value={input}
        />
        <button>aggiungiu un task</button>
      </form>

      {tasks.map((task, index) => {
        return <Days key={index} task={task} />;
      })}
    </div>
  );
}
