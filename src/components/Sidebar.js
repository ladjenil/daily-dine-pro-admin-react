import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

export default function Sidebar({ active, onChange }) {
  const menu = [
    'Dashboard',
    'Mess Owners',
    'Customers',
    'Daily Menu',
    'Queries'
  ];

  return (
    <View style={{
      width: 240,
      height: '100vh',
      backgroundColor: COLORS.white,
      borderRightWidth: 1,
      borderColor: COLORS.border,
      padding: 20
    }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 20, color: COLORS.primary }}>DailyDine</Text>
      {menu.map(item => (
        <TouchableOpacity key={item} onPress={() => onChange(item)} style={{ marginBottom: 12 }}>
          <Text style={{
            color: active === item ? COLORS.primary : COLORS.textDark,
            fontWeight: active === item ? '700' : '500'
          }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
