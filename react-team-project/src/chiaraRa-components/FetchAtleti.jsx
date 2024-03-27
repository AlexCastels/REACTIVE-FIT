

import { useEffect, useState } from "react"
import { CardAtleta } from "./CardAtleta"

export function FetchAtleti(){
    
    const [atleti, setAtlet] = useState([])
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5663e152edmsh4292669f96e8005p15e397jsnb1b0b9bc118e',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
async function getData(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}   
useEffect(()=>{
    getData()
},[])
    return (
        <>
            
                {atleti.map((item) => (
                <CardAtleta key={item.id} item={item} />
                ))}
                    
        </>
    )
}