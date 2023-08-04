// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
         path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          render={() => (<Login />)}
        />
        <Route path="/signup" element={< Signup/>} />
        <Route
          path="/dashboard" element={< Dashboard />}
          render={() => (isLoggedIn ? <Dashboard /> : <Navigate to="/" />)}
        />
      </Routes>
    </Router>
  );
};

export default App;

