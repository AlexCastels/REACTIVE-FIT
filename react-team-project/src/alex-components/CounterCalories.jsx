import './counterCalories.css'
import { useState } from "react"
import CounterCaloriesPie from "./CounterCaloriesPie"

export function CounterCalories(){

    const [data , setData] = useState([])
    const [input , setInput] = useState('')
    const [total ,setTotal] = useState({
        protein : 0,
        fat: 0,
        carbo: 0
    })
    const [prova , setProva] = useState(0)
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
                setData((d) => [...d , json[0]])
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
        if(data){
            let proteinV = 0
            let carboV = 0
            let fatV = 0
            data.forEach((item) => {
                proteinV += item.protein_g
                carboV += item.carbohydrates_total_g
                fatV += item.fat_total_g
            })
            setTotal((p) => {
                return {
                    ...p,
                    protein : proteinV,
                    fat: fatV,
                    carbo: carboV
                }
            })
            // setTotal((p) => {
            //     return {
            //         ...p ,
            //         protein: p.protein += data[0].protein_g ,
            //         fat: p.fat += data[0].fat_total_g,
            //         carbo: p.carbo += data[0].carbohydrates_total_g 
            //     }
            // })
        }
        setInput('')
    }

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
                {data.length > 0 && data.map((item , index) => (
                    <p key={index}>{item.name} {item.calories}</p>
                ))}
            </div>
            <div className='pie-cake'>
                <CounterCaloriesPie macro={total}/> 
            </div>
        </div>
    )
}