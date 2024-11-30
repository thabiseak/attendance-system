// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setToken }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken('');
        navigate('/login');
    };

    return (
        <div className="home-container">
            <header className="header">
                <div className="welcome-message">School student attendance managing system</div>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </header>
            <div className="sidebar">
                <ul>
                    <li><i className="fas fa-tachometer-alt"></i> Dashboard</li>
                    <li><i className="fas fa-building"></i> Classes <span className="dropdown-arrow"><i className="fas fa-chevron-down"></i></span></li>
                    <li><i className="fas fa-user-graduate"></i> Student <span className="dropdown-arrow"><i className="fas fa-chevron-down"></i></span></li>
                    <li><i className="fas fa-chart-line"></i> Report <span className="dropdown-arrow"><i className="fas fa-chevron-down"></i></span></li>
                </ul>
            </div>
            <div className="main-content">
                <h1>Welcome Back Thabiseak_Intern2025</h1>
                <div className="info-boxes">
                    <div className="info-box">
                        <div className="icon">👥</div>
                        <div className="text">
                            <h2>REGISTERED STUDENTS</h2>
                            <p>4</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icon">📄</div>
                        <div className="text">
                            <h2>LISTED CLASSES</h2>
                            <p>5</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icon">📋</div>
                        <div className="text">
                            <h2>STUDENT ATTENDANCE TODAY</h2>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icon">📅</div>
                        <div className="text">
                            <h2>STUDENT ATTENDANCE YESTERDAY</h2>
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;