import { useEffect, useState } from "react"

export function Logo() {
const [rotate, setRotate]=useState(0)
useEffect (()=> {
    let i = 0
    const rotate = setInterval(() => {
        i=i+10
        setRotate(i);
      }, 30);
      const resetRotate= setTimeout(() => {
        setRotate(0);
      }, 6000);
  
      return () => {
        clearTimeout(rotate);
        clearTimeout(resetRotate);
      };

 
}, [])


    return (
        <img src="./Default_a_healtly_life_logo_for_a_app_0.png" alt="" style={{transform:`rotate(${rotate}deg)`}}/>
    )
}