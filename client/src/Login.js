// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { login } from './apiService';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const token = await login(username, password);
            setToken(token);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src="arrow-icon.png" alt="Logo" /> {/* Replace with your logo */}
            </div>
            <div className="title">Sign in with user name</div>
            <div className="subtext">Student Attendance Management System. For free.</div>
            {error && <div className="error">{error}</div>}
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

export default Login;