// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { login } from './apiService';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        try {
            const token = await login(username, password);
            setToken(token);
            navigate('/home');
        } catch (err) {
            setError(err.message === 'Failed to fetch' ? 'Unable to connect to the server. Please try again later.' : err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src="/high-logo.png" alt="Logo" /> {/* Logo from public directory */}
            </div>
            <div className="title">Sign In</div>
            <div className="subtext">Student Attendance Management System. For free.</div>
            {error && <div className="error">{error}</div>}
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-label="Username"
                />
                <span className="icon">👤</span> {/* User icon */}
            </div>
            <div className="input-container">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                />
                <span className="icon" onClick={() => setShowPassword(!showPassword)}>🔒</span> {/* Lock icon */}
            </div>
            <div className="options">
                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember Me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button className="button" onClick={handleLogin} disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
            </button>
        </div>
    );
};

export default Login;