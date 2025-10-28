import React from 'react';
import { GLOBAL_STYLES } from '../constants/styles';

export default function CustomerDetailsScreen() {
  const customer = {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210'
  };

  return (
    <div style={GLOBAL_STYLES.container}>
      <h2 style={GLOBAL_STYLES.title}>Customer Details</h2>

      <div style={GLOBAL_STYLES.card}>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
      </div>
    </div>
  );
}
