import { useState } from "react"
import "./Workandsleep.css"

function WorkoutAndSleep() {
    const [workoutCount, setWorkoutCount] = useState(0);
    const [savedWorkoutCount, setSavedWorkoutCount] = useState(0);
    const [sleepHours, setSleepHours] = useState(0);
    const [savedSleepHours, setSavedSleepHours] = useState([]);

    const increaseWorkouts = () => {
        setWorkoutCount(prevCount => prevCount + 1);
    };

    const decreaseWorkouts = () => {
        if (workoutCount > 0) {
            setWorkoutCount(prevCount => prevCount - 1);
        }
    };

    const handleSleepHoursChange = (e) => {
        setSleepHours(parseInt(e.target.value));
    };

    const saveData = () => {
        const today = new Date().toLocaleDateString();
        const updatedSleepHours = { day: today, hours: sleepHours };
        setSavedSleepHours(prevHours => [...prevHours, updatedSleepHours]);
        setSavedWorkoutCount(workoutCount);
    };

    const deleteAllData = () => {
        setSavedSleepHours([]);
        setSavedWorkoutCount(0);
    };

    return (
        <div className="containerbox">

            <div className="allenamentiSett">
                {/* ex className box */}
            <div className="box bg-transparent border-gray-800 shadow-lg  backdrop-blur-50">
                <h2>Conteggio Allenamenti Settimanali</h2>
                <div className="counter">
                    <button onClick={decreaseWorkouts}>-</button>
                    <span>{workoutCount}</span>
                    <button onClick={increaseWorkouts}>+</button>
                </div>
            </div>
        </div>


        <div className="orediSonno">
            {/* ex className box */}
            <div className="box bg-transparent border-gray-800 shadow-lg  backdrop-blur-50">
                <h2>Seleziona Ore di Sonno</h2>
                <div className="sleep-hours">
                    <input type="range" min="0" max="24" value={sleepHours} onChange={handleSleepHoursChange} />
                    <span>Ore di sonno selezionate: {sleepHours}</span>
                    <div className="button-action">
                    <button onClick={saveData}>Salva</button>
                <button onClick={deleteAllData}>Cancella</button>
                </div>
                </div>
            </div>
            </div>


            <div className="storicoDati">
            {/* ex className box */}
            <div className="box bg-transparent border-gray-800 shadow-lg  backdrop-blur-50">
                <h2>Storico Dati Salvati</h2>
                <li>Allenamenti settimanali: {savedWorkoutCount}</li>
                <li>
                {savedSleepHours.reduce((total, item) => total + item.hours, 0)} ore
                </li>
            </div>
            </div>
        </div>
    );
}

            export default WorkoutAndSleep;