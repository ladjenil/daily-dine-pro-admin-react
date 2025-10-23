import React from 'react';
import { MdDashboard, MdStore, MdGroup, MdHelpOutline, MdSettings } from 'react-icons/md';
import { colors } from '../constants/theme';

// Map string icon names to react-icons components
const iconMap = {
  dashboard: MdDashboard,
  storefront: MdStore,
  group: MdGroup,
  help: MdHelpOutline,
  settings: MdSettings,
};

const NavItem = ({ icon, label, active = false, onClick }) => {
  const IconComponent = iconMap[icon];

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        borderRadius: 8,
        gap: 12,
        backgroundColor: active ? colors.primaryLight : 'transparent',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {IconComponent && (
        <IconComponent
          size={24}
          color={active ? colors.primary : colors.textSecondary}
        />
      )}
      <span
        style={{
          fontSize: 14,
          fontWeight: active ? 'bold' : 500,
          color: active ? colors.primary : colors.text,
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default NavItem;
