import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardScreen from './screens/DashboardScreen';
import MessOwnersScreen from './screens/MessOwnersScreen';
import CustomersScreen from './screens/CustomersScreen';
import QueriesScreen from './screens/QueriesScreen';
import VerificationScreen from './screens/VerificationScreen'; // Based on your HTML

function App() {
  // This state replaces the showSection() function
  const [activeScreen, setActiveScreen] = useState('dashboard');

  // This object maps the state to the correct screen component
  const screens = {
    dashboard: <DashboardScreen />,
    'mess-owners': <MessOwnersScreen />,
    customers: <CustomersScreen />,
    queries: <QueriesScreen />,
    verification: <VerificationScreen />,
  };

  return (
    <div className="flex h-full min-h-screen">
      {/* Sidebar component */}
      <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {/* Header component */}
        <Header activeScreen={activeScreen} />

        {/* Page content */}
        <main className="p-6">
          {/* Render the active screen component */}
          {screens[activeScreen]}
        </main>
      </div>
    </div>
  );
}

export default App;