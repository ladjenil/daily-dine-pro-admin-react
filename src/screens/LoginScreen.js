// src/screens/LoginScreen.js

import React, { useState, useEffect } from 'react';
import LoginCard from '../components/LoginCard';
import ForgotPasswordCard from '../components/ForgotPasswordCard';
import FloatingShapes from '../components/FloatingShapes';

// SDK configuration
const defaultConfig = {
  platform_title: 'Daily Dine',
  admin_subtitle: 'Admin Dashboard',
  login_button_text: 'Sign In',
};

const LoginScreen = ({ onLogin }) => {
  const [activeCard, setActiveCard] = useState('login'); // 'login' or 'forgot'
  const [config, setConfig] = useState(defaultConfig);

  // Initialize Element SDK
  useEffect(() => {
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange: (newConfig) => setConfig(newConfig),
        // ... (other SDK map functions from your HTML)
        mapToEditPanelValues: (config) =>
          new Map([
            ['platform_title', config.platform_title || defaultConfig.platform_title],
            ['admin_subtitle', config.admin_subtitle || defaultConfig.admin_subtitle],
            ['login_button_text', config.login_button_text || defaultConfig.login_button_text],
          ]),
      });
    }
  }, []); // Empty array ensures this runs only once

  const showLogin = () => setActiveCard('login');
  const showForgotPassword = () => setActiveCard('forgot');

  return (
    <main className="min-h-full gradient-bg relative flex items-center justify-center p-4">
      <FloatingShapes />

      {activeCard === 'login' ? (
        <LoginCard
          onShowForgotPassword={showForgotPassword}
          onLogin={onLogin} // Pass the onLogin prop
          config={config}
        />
      ) : (
        <ForgotPasswordCard onShowLogin={showLogin} config={config} />
      )}
    </main>
  );
};

export default LoginScreen;