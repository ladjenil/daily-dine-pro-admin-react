import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants/colors';

export default function StatusBadge({ status }) {
  let color = COLORS.gray;
  if (status === 'Active' || status === 'Approved') color = COLORS.success;
  if (status === 'Inactive' || status === 'Restricted') color = COLORS.danger;
  if (status === 'Pending') color = COLORS.warning;

  return (
    <View style={{
      backgroundColor: color,
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 4
    }}>
      <Text style={{ fontSize: 12 }}>{status}</Text>
    </View>
  );
}
