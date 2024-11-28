import React, { useState } from 'react';

const App = () => {
    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div>
            {!token ? (
                <div>
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
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome</h2>
                    <button onClick={() => setToken('')}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default App;