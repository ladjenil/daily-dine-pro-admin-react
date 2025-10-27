import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { COLORS } from '../constants/colors';

export default function Header({ title }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: COLORS.textDark }}>{title}</Text>
      <TextInput
        placeholder="Search..."
        style={{
          width: 280,
          backgroundColor: COLORS.white,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: COLORS.border,
          padding: 8
        }}
      />
    </View>
  );
}
