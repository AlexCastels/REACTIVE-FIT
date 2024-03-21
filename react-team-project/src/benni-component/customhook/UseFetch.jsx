import { useState } from "react";

export function UseFetch() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState([]);
  
    async function fecthData(route) {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`http://localhost:3000/api/${route}`);
        const datauser = await res.json();
        setData(datauser);
        
      } catch (error) {
        setError(error)
        console.log("errore"+error)
      }
      finally{
          setLoading(false)
      }
    }
    function handleUsername(e) {
      setUsername(e.target.value);
    }
    function handlePassword(e) {
       setPassword(e.target.value);
      }
    function getInput(e) {
      e.preventDefault();
      fecthData();
    }
  
    return [data, error, loading, getInput, handleUsername, handlePassword];
}