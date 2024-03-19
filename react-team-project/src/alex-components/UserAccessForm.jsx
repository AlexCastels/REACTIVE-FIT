import { useState } from "react"
import './userAccessForm.css'
import { Link } from "react-router-dom"
import { Hero } from "../Hero"
import { ButtonComponent } from "../style-site/ButtonComponent"

export function UserAccessForm() {

    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    function handleForm(e) {
        e.preventDefault()
        const userData = input
        console.log(userData)
    }

    function handleInput(e) {
        const value = e.target.value
        const name = e.target.name
        setInput((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <div className="container-form-homepage">
            <div className="general-container">
                <form onSubmit={handleForm} className="form-container">
                    <h3 className="h5-form">Accedi con le tue credenziali</h3>
                    <div className="input">
                        <label htmlFor="email"> E-mail</label>
                        <input className="inputForm" type="email" onChange={handleInput} name="email" />
                    </div>
                    <div className="input">
                        <label htmlFor="password"> Password</label>
                        <input className='inputForm' type="password" onChange={handleInput} name="password" />
                    </div>
                    <div className="container-buttons-form">
                        <Link to={"/hero"} element={<Hero />}>
                            <ButtonComponent text={'Sign-up'} />
                            <ButtonComponent text={'Login'} />
                            {/* <button className="buttonForm" disabled={!input.email || !input.password}>Login</button>  */}
                        </Link>
                    </div>
                    <div className="container-button-pt">
                        <h5>Sei un Personal Trainer?</h5>
                        <div className="container-button-pt-iscriviti">
                            <ButtonComponent text={'Accedi'} />
                            <p>o iscriviti</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}