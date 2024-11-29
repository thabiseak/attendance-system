import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
        <div className="login-container">
            <div className="logo">
                <img src="arrow-icon.png" alt="Logo" /> {/* Replace with your logo */}
            </div>
            <div className="title">Sign in with user name</div>
            <div className="subtext">Make a new doc to bring your words, data, and teams together. For free.</div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <span className="icon">📧</span> {/* Envelope icon */}
            </div>
            <div className="input-container">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon" onClick={() => setShowPassword(!showPassword)}>👁️</span> {/* Eye icon */}
            </div>
            <button className="button" onClick={handleLogin}>LogIn</button>
        </div>
    );
};

const Dashboard = ({ setToken }) => (
    <div>
        <h2>Welcome</h2>
        <button onClick={() => setToken('')}>Logout</button>
    </div>
);

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <Routes>
                <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={token ? <Dashboard setToken={setToken} /> : <Navigate to="/login" />} />
                <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
            </Routes>
        </Router>
    );
};

export default App;