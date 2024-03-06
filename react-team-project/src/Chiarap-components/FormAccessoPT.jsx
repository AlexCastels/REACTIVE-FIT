import { useState } from "react"
import "./FormAccessoPT.css"
export function FormAccessoPT(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div>
            <h2 className="title">Accedi con le tue credenziali</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} required />
                </div>
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit">Accedi</button>
            </form>
        </div>
    );
}

export default FormAccessoPT;