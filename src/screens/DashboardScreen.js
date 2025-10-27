import React from 'react';
import { View, Text } from 'react-native';
import { GLOBAL_STYLES } from '../constants/styles';
import { DATA } from '../constants/data';

export default function DashboardScreen() {
  const d = DATA.dashboard;
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text style={GLOBAL_STYLES.title}>Dashboard</Text>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <View style={[GLOBAL_STYLES.card, { flex: 1 }]}>
          <Text>Total Mess Owners</Text>
          <Text style={{ fontSize: 28, fontWeight: '700' }}>{d.messOwners}</Text>
        </View>
        <View style={[GLOBAL_STYLES.card, { flex: 1 }]}>
          <Text>Total Customers</Text>
          <Text style={{ fontSize: 28, fontWeight: '700' }}>{d.customers}</Text>
        </View>
      </View>
    </View>
  );
}
