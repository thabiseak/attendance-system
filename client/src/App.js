import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home'; // Create a Home component
import './Login.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleSetToken = (token) => {
        setToken(token);
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={!token ? <Login setToken={handleSetToken} /> : <Navigate to="/home" />} />
                <Route path="/home" element={token ? <Home setToken={handleSetToken} /> : <Navigate to="/login" />} />
                <Route path="/" element={<Navigate to={token ? "/home" : "/login"} />} />
            </Routes>
        </Router>
    );
};

export default App;