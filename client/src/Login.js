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
        <div className="login-page">
            <div className="login-container">
                <div className="logo">
                    <img src="high-logo.png" alt="Logo" /> 
                </div>
                <div className="title">Access Your Account</div>
                <div className="subtext">Student Attendance Management System</div>
                {error && <div className="error">{error}</div>}
                <div className="input-container">
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-label="Username" />
                    <span className="icon">👤</span> {/* User icon */}
                </div>
                <div className="input-container">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Password" />
                    <span className="icon" onClick={() => setShowPassword(!showPassword)}>🔒</span> {/* Lock icon */}
                </div>
                <button className="button" onClick={handleLogin} disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </div>
        </div>
    );
};

export default Login;