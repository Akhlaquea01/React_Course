import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    };
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);
    return (
        <div>
            <h2>Logn</h2>
            <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value); }} placeholder='userName' />
            <br />
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;