import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const Auth = () => {
    const [login, setLogin] = useState ('')
    const history = useHistory ()
    const sendLogin = () => {
        if (localStorage.getItem ('login')) {
            localStorage.removeItem ('login')
        }
        localStorage.setItem ('login', login)
        console.log (localStorage.getItem ('login'))
        history.push ('/chat')
    }
    return <div>
        <h2>Auth</h2>
        <h3>Введи логин</h3>
        <input
            type="text"
            placeholder="User name"
            value={login}
            onChange={(e) => setLogin (e.target.value)}/>
        <button type="button"
                onClick={sendLogin}>login
        </button>
    </div>
}