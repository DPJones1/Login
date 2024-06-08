import React, { useState } from 'react';
import Login from './Login';
import Success from './Success';
import Failure from './Failure';

// Main App component to manage navigation
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // State to track login status

  // Function to handle login result
  const handleLogin = (success) => {
    setIsLoggedIn(success); // Update login status
  };

  // Function to handle retry action
  const handleRetry = () => {
    setIsLoggedIn(null); // Reset login status to show login screen again
  };

  // Render the appropriate component based on the isLoggedIn state
  return React.createElement('div', null,
    isLoggedIn === null && React.createElement(Login, { onLogin: handleLogin }),
    isLoggedIn === true && React.createElement(Success, null),
    isLoggedIn === false && React.createElement(Failure, { onRetry: handleRetry })
  );
};

export default App;
