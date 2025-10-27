import React from 'react';
import { View, Text } from 'react-native';
import { GLOBAL_STYLES } from '../constants/styles';

export default function CustomerDetailsScreen() {
  const customer = {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210'
  };
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text style={GLOBAL_STYLES.title}>Customer Details</Text>
      <View style={GLOBAL_STYLES.card}>
        <Text><b>Name:</b> {customer.name}</Text>
        <Text><b>Email:</b> {customer.email}</Text>
        <Text><b>Phone:</b> {customer.phone}</Text>
      </View>
    </View>
  );
}
