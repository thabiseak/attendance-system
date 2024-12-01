# Attendance System  

Welcome to the **Attendance System** repository! This project is a practical assessment for aspiring software engineers, designed to evaluate full-stack development skills, including backend API implementation, frontend UI development, and client-server communication.

---

## 🌟 Project Overview  

The **Attendance System** simplifies school attendance management by offering a login-based application where users can securely authenticate and navigate through the system. The project demonstrates essential software engineering practices and is built with modularity and scalability in mind.

---

## 🛠 Features  

1. **Authentication**:  
   - Login system secured with JWT tokens.  
   - Validation for incorrect credentials.  
   - Session management for user navigation.  

2. **Frontend**:  
   - **Login Page**: Input fields for username and password with responsive design.  
   - **Home Page**: Displays a personalized welcome message and a logout option.  

3. **Backend**:  
   - REST API implementation for login functionality.  
   - Lightweight credential storage for testing purposes.  

4. **Client-Server Integration**:  
   - Robust communication using REST APIs.  
   - Conditional navigation based on authentication status.  

5. **Documentation**:  
   - Clear setup instructions.  
   - Testing credentials included for quick evaluation.  

---

## 📂 Project Structure  

```plaintext
attendance-system/
├── server/           # Backend code
│   ├── index.js      # Main server file
│   ├── .....         # Authentication logic
│                     # Server configurations
├── client/           # Frontend code
│   ├── src/          # React/HTML files
│   └── public/       # Static assets
├── docs/             # Screenshots 
└── README.md         # Documentation (this file)
```

---

## 🚀 Quick Start  

### Prerequisites  
- **Node.js** (v14 or higher)  
- **npm** or **yarn**  

### Setup Instructions  

#### 1. Clone the Repository  
```bash
git clone https://github.com/thabiseak/attendance-system.git
cd attendance-system
```

#### 2. Backend (Server) Setup  
1. Navigate to the `server` folder:  
   ```bash
   cd server
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the server:  
   ```bash
   node index.js
   ```
4. The server runs on `http://localhost:3001`.

#### 3. Frontend (Client) Setup  
1. Navigate to the `client` folder:  
   ```bash
   cd client
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the client:  
   ```bash
   npm start
   ```
4. The client runs on `http://localhost:3000`.

---

## 🧪 Testing Credentials  

Use the following credentials to log in:  
- **Username**: `Thabu_Intern2024`  
- **Password**: `SelectMe_#1!`  

---

## 📸 Screenshots  

Find screenshots of the application in the `docs/` folder.  

Examples:  
1. **Login Page**: Shows the username/password fields and login button.  
2. **Home Page**: Displays a personalized greeting with dashboard and logout button.  

---

## 🌱 Development Guide  

### Backend  
- REST API implemented in `Node.js`.  
- Auth logic handled using JSON Web Tokens (JWT).  

### Frontend  
- Built with React for a dynamic and interactive user experience.  
- Session management using localStorage for token storage.  

---

## 📌 Future Enhancements  

1. **Database Integration**: Use MongoDB or PostgreSQL for credential storage.  
2. **Password Security**: Implement password hashing with libraries like bcrypt.  
3. **Role-Based Access Control**: Add admin and student roles with different permissions.  
4. **Deployment**: Host the app on platforms like AWS, Heroku, or Vercel for real-world usage.  

---

## 💡 Why This Project?  

This repository showcases core software engineering principles like modular coding, client-server architecture, and effective documentation. It serves as both an assessment and a learning resource for full-stack development.  

---


## 🤝 Contributing  

We welcome contributions! To get started:  
1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature/new-feature`).  
3. Commit your changes (`git commit -m "Add new feature"`).  
4. Push to your branch (`git push origin feature/new-feature`).  
5. Create a Pull Request.  

---

## 📧 Contact  

For questions or feedback, feel free to reach out to the repository owner:  
- **Name**: Thavanesan Thabiseak  
- **Email**: your-email@example.com  
- **GitHub**: [github.com/your-username](https://github.com/your-username)  

Let’s build something amazing together! 🎉