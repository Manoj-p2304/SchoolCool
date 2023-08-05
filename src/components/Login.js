// // Login.js
// import React, { useState } from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import css from "../App.css"
// import axios from 'axios';

// const Login = ({ isLoggedIn, setIsLoggedIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/student_server/login', {
//         email,
//         password,
//       });

//       console.log(response.data);
//     } catch (error) {
//       console.error('Error logging in:', error.response.data);
//     }
//   };

//   if (isLoggedIn) {
//     return <Navigate to="/dashboard" />;
//   }

//   return (

//     <div id='main'>

//       <h1>Login</h1>
//       <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       <p>
//         Don't have an account? <Link to="/signup">Sign up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth", {
        username,
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error.response.data);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
