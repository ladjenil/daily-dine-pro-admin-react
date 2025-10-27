import React from 'react';
import { View, Text } from 'react-native';
import { GLOBAL_STYLES } from '../constants/styles';
import StatusBadge from './StatusBadge';

export default function Table({ rows }) {
  return (
    <View style={GLOBAL_STYLES.card}>
      {rows.map((row, idx) => (
        <View key={idx} style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 8
        }}>
          <View>
            <Text style={{ fontWeight: '600' }}>{row.name || row.id}</Text>
            <Text style={{ color: '#777' }}>{row.email}</Text>
          </View>
          <StatusBadge status={row.status} />
        </View>
      ))}
    </View>
  );
}
