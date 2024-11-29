const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = "your_jwt_secret";
const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// Root URL route
app.get('/', (req, res) => {
    res.send('Welcome to the Attendance System API');
});

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

// Start the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

