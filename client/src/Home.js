// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setToken }) => {
    const navigate = useNavigate();
    const userName = "User"; // Replace with actual user name

    const handleLogout = () => {
        setToken('');
        navigate('/login');
    };

    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">Institution Logo</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Attendance Records</a>
                    <a href="#">Profile</a>
                </nav>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </header>
            <section className="welcome-section">
                <h1>Welcome, {userName}!</h1>
            </section>
            <section className="attendance-summary">
                <h2>Today's Attendance</h2>
                <p>You have marked attendance for 5 out of 5 students today.</p>
                <a href="#">View detailed attendance records</a>
            </section>
            <section className="mark-attendance">
                <h2>Mark Attendance</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Mark Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Student 1</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td>Student 2</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        {/* Add more students as needed */}
                    </tbody>
                </table>
                <button className="submit-button">Submit</button>
            </section>
            <section className="previous-attendance">
                <h2>Previous Attendance Records</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>2024-07-01</th>
                            <th>2024-07-02</th>
                            {/* Add more dates as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Student 1</td>
                            <td>Present</td>
                            <td>Absent</td>
                            {/* Add more attendance status as needed */}
                        </tr>
                        <tr>
                            <td>Student 2</td>
                            <td>Present</td>
                            <td>Present</td>
                            {/* Add more attendance status as needed */}
                        </tr>
                        {/* Add more students as needed */}
                    </tbody>
                </table>
            </section>
            <footer className="footer">
                <p>Contact Information: contact@institution.com</p>
                <p>
                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Help/Support</a>
                </p>
            </footer>
        </div>
    );
};

export default Home;