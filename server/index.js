const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = "your_jwt_secret";
const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

// Start the server
app.listen(3001, () => console.log('Server running on http://localhost:3001'));
