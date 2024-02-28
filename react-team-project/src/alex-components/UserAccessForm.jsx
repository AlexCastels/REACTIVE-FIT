import { useState } from "react"
import './userAccessForm.css'

export function UserAccessForm(){
    
    const [input , setInput] = useState({
        email : '' ,
        password : '',
    })

    function handleForm(e){
        e.preventDefault()
        const userData = input
        console.log(userData)
    }

    function handleInput(e){
        const value = e.target.value 
        const name = e.target.name
        setInput((prev) => {
            return {...prev ,
                [name] : value,    
            }
        })
    }
    
    return (
        <div className="general-container">
            <form onSubmit={handleForm} className="form-container">
                <h5 className="h5">Accedi con le tue credenziali</h5>
                <div className="input">
                    <label htmlFor="email"> E-mail</label> 
                    <input className="inputForm" type="email" onChange={handleInput} name="email"/>
                </div>
                <div className="input">
                    <label htmlFor="password"> Password</label>
                    <input className='inputForm' type="password" onChange={handleInput} name="password"/>
                </div> 
                <button className="buttonForm" disabled={!input.email || !input.password}>Login</button>    
            </form>
        </div>
    )
}