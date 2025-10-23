import React from 'react';
import { colors } from '../constants/theme';

const QueryItem = ({ item, onSelect, isSelected }) => (
  <div
    onClick={() => onSelect(item)}
    style={{
      padding: 12,
      cursor: 'pointer',
      backgroundColor: isSelected ? colors.primaryLight : colors.white,
      borderBottom: `1px solid ${colors.border}`,
    }}
  >
    <div style={{ fontWeight: 'bold', color: colors.text }}>{item.name}</div>
    <div style={{ fontSize: 12, color: colors.textSecondary }}>{item.message}</div>
  </div>
);

export default QueryItem;
