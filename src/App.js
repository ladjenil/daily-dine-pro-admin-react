import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainApp from './MainApp'; // Your entire Dashboard app
import LoginScreen from './screens/LoginScreen';

function App() {
  // In a real app, you'd check localStorage for a token
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be passed to LoginScreen
  const handleLogin = () => {
    // This is where you would set the auth token
    console.log('Login successful!');
    setIsLoggedIn(true);
  };

  // This function would be passed to MainApp to handle logout
  const handleLogout = () => {
    // This is where you would clear the auth token
    console.log('Logout successful!');
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <LoginScreen onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/*"
        element={
          isLoggedIn ? (
            <MainApp onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;