import React, { useState } from 'react';
import { validateLogin} from '../services/login-services';
import './login.css';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const data = await validateLogin(username, password);
            localStorage.setItem('token', data.data.token);
            setMessage('Login exitoso!');
            if (onLoginSuccess) {
                onLoginSuccess();
            }
        } catch (error) {
            setMessage('Error intentar ingresar');
        }
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                {message && <p className='alert-error'>{message}</p>}
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>            
        </div>
    );
}

export default Login;