import { useState } from "react";
import Calendar from "react-calendar";
import './react-calendar.css'


export function CalendarYears(){
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}