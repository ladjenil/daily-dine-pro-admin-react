// src/MainApp.js
// This is your ENTIRE dashboard application from our previous conversation.
// I've added the `onLogout` prop.

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardScreen from './screens/DashboardScreen';
import MessOwnersScreen from './screens/MessOwnersScreen';
import CustomersScreen from './screens/CustomersScreen';
import QueriesScreen from './screens/QueriesScreen';
import VerificationScreen from './screens/VerificationScreen';

// Receive onLogout as a prop
function MainApp({ onLogout }) { 
  const [activeScreen, setActiveScreen] = useState('dashboard');

  const screens = {
    dashboard: <DashboardScreen />,
    'mess-owners': <MessOwnersScreen />,
    customers: <CustomersScreen />,
    queries: <QueriesScreen />,
    verification: <VerificationScreen />,
  };

  return (
    <div className="flex h-full min-h-screen">
      {/* Pass onLogout to the Sidebar or Header where your logout button will be */}
      <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} onLogout={onLogout} />
      <div className="flex-1 overflow-auto">
        <Header activeScreen={activeScreen} />
        <main className="p-6">{screens[activeScreen]}</main>
      </div>
    </div>
  );
}

export default MainApp;