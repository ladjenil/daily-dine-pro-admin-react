import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardScreen from './screens/DashboardScreen';
import CustomersScreen from './screens/CustomersScreen';
import CustomerDetailsScreen from './screens/CustomerDetailsScreen';
import MessOwnersScreen from './screens/MessOwnersScreen';
import MessOwnerDetailsScreen from './screens/MessOwnerDetailsScreen';
import DailyMenuScreen from './screens/DailyMenuScreen';
import QueriesScreen from './screens/QueriesScreen';
import { GLOBAL_STYLES } from './constants/styles';

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState('Dashboard');

  const renderScreen = () => {
    switch (selectedScreen) {
      case 'Dashboard': return <DashboardScreen />;
      case 'Customers': return <CustomersScreen />;
      case 'Customer Details': return <CustomerDetailsScreen />;
      case 'Mess Owners': return <MessOwnersScreen />;
      case 'Mess Owner Details': return <MessOwnerDetailsScreen />;
      case 'Daily Menu': return <DailyMenuScreen />;
      case 'Queries': return <QueriesScreen />;
      default: return <DashboardScreen />;
    }
  };

  return (
    <View style={{ flexDirection: 'row', flex: 1, height: '100vh' }}>
      <Sidebar onSelect={setSelectedScreen} selected={selectedScreen} />
      <View style={{ flex: 1 }}>
        <Header title={selectedScreen} />
        <ScrollView style={GLOBAL_STYLES.container}>
          {renderScreen()}
        </ScrollView>
      </View>
    </View>
  );
}
