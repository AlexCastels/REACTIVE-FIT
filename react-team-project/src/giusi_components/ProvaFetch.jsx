import { useEffect, useState } from "react";

export function ProvaFetch() {
    const [data, setData] = useState()
    const [input, setInput] = useState()

    const url = `https://workout-planner1.p.rapidapi.com/customized?time=30&equipment=dumbbells&muscle=${input}&fitness_level=beginner&fitness_goals=strength`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '121ff16b12msha09b3ca613eff16p1a7a81jsnaeeff85e7ff2',
            'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
        }
    };

    async function getData(){
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result)
        } catch (error) {
            console.error(error);
        }
    }

    if(data){
        console.log(data);
    }
    // useEffect(()=>{
    //     getData()
    // },[input])
    return (
        <>
     <input type="text" onChange={(e)=>(e.target.value)}/>
     <button onClick={()=>getData()}>invia</button>
        </>
    )
}