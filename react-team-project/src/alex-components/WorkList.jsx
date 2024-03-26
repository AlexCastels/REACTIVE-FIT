import { useEffect, useState } from "react";
import { WorkApiCard } from "./WorkApiCard";
import './workApi.css'


export function WorkList() {
    
    const [data , setData] = useState([])
    
    async function getData() {
        const url =
            "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=30";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "09d11f3934msh4cb88cb42be833fp1623ebjsn0a4f9c4bce76",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="workApi-general-container">
            <div className="workApi-card-container">
                {data.map((item) => (
                    <WorkApiCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

