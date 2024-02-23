import { useState } from "react"
import "./RegistrationUser.css"


export function RegistrationUser(){
    
    const [input , setInput] = useState({
        nome: ``,
        cognome: ``,
        email : '' ,
        password : '',
        confermaPassword: ``, 

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
        <div className="general-container-reg">
            <form onSubmit={handleForm} className="form-container-reg">
                <h5>Registrati</h5>
                <div className="input">
                    <label htmlFor="nome"> Nome</label> 
                    <input type="text" className="input-reg" onChange={handleInput} name="nome"/>
                </div>
                <div className="input">
                    <label htmlFor="cognome"> Cognome</label> 
                    <input type="text" className="input-reg" onChange={handleInput} name="cognome"/>
                </div>
                <div className="input">
                    <label htmlFor="email"> E-mail</label> 
                    <input type="email" className="input-reg" onChange={handleInput} name="email"/>
                </div>
                <div className="input">
                    <label htmlFor="password"> Password</label>
                    <input type="password" className="input-reg" onChange={handleInput} name="password"/>
                </div> 
                <div className="input">
                    <label htmlFor="ripetipassword"> conferma la Password</label>
                    <input type="password" className="input-reg" onChange={handleInput}  name="password"/>
                </div>
                {input.confermaPassword!==input.password && <p>password non corrispondente</p>}
                <div className="input">
                    <select name="type" className="select-reg" id="type">
                        <option value="utente">Utente</option>
                        <option value="personal-trainer">Personal Trainer</option>
                        <option value="nutrizionista">Nutrizionista</option>
                    </select>
                </div> 
                <button disabled={!input.email || !input.password}>Login</button>    
            </form>
        </div>
    )
}