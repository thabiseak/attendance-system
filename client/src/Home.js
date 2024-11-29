// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ setToken }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken('');
        navigate('/login');
    };

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;