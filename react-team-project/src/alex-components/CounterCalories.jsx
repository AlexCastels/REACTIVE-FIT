import './counterCalories.css'
import { useEffect, useState } from "react"
import CounterCaloriesPie from "./CounterCaloriesPie"

export function CounterCalories(){

    const [data , setData] = useState([])
    const [input , setInput] = useState('')
    const [counter , setCounter] = useState(0)
    const [dailyKcal , setDailyKcal] = useState(2400)
    // const [overKcal , setOverKcal] = useState(0)
    const [total ,setTotal] = useState({
        protein : 0,
        fat: 0,
        carbo: 0
    })
    
    let options = {
        method: 'GET',
        headers: { 'x-api-key': '2wNbvIicKrDRsrkhi0/0AA==mep1JCCjE5EuDnkN' }
    }
    
    async function getData(){
        try {
            const res = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${input}` , options)
            if(!res.ok){
                throw new Error('error')
            } else {
                const json = await res.json()
                if(json !== undefined){
                    setData((d) => [...d , json[0]])
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    function handleInput(e){
        setInput(e.target.value)
    }

    function handleBtn(){
        getData()
        setInput('')
    }

    useEffect(()=>{
        if(data){
            let proteinV = 0
            let carboV = 0
            let fatV = 0
            data.forEach((item, index) => {
                proteinV += item.protein_g
                carboV += item.carbohydrates_total_g
                fatV += item.fat_total_g
                setCounter((p)=> Number(p) + Number(item.calories))
                setDailyKcal((p) => Number(p) - Number(item.calories))
                
                // if(dailyKcal <= 0){
                //     setOverKcal((p) => p + Number(item.calories))
                // }
            })

            setTotal((p) => {
                return {
                    ...p,
                    protein : proteinV,
                    fat: fatV,
                    carbo: carboV
                }
            })
        }
    },[data])

    if(total){
        console.log(total);
    }

    if(data){
        console.log(data);
    }

    return (
        <div className="pie-container">
            <div className='pie-input'>
                <input onChange={handleInput} placeholder="Search Foods.." value={input}></input>
                <button onClick={handleBtn}>Search</button>
            </div>
            <div className='pie-list'>
                {data.length > 0 ? data.map((item , index) => (
                    <p key={index}>{item.name} {item.calories}</p>
                )) : <p>Cerca un alimento da aggiungere alla lista!</p>}
            </div>
            {counter !== 0 && <p>Kcal Totali: {Math.round(counter)} </p>}
            {dailyKcal >= 0 ? <p>{Math.round(dailyKcal)} kcal rimanenti!</p> : <p>Kcal giornaliere raggiunte!</p>}
            <div className='pie-cake'>
               <CounterCaloriesPie macro={total}/>
                
            </div>
        </div>
    )
}