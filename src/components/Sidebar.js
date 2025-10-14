import React from 'react';
import { MdDashboard, MdStorefront, MdGroup, MdMarkEmailUnread, MdSettings, MdHelpOutline } from 'react-icons/md';
import '../App.css'; // optional, if you want to move styles into CSS
import { colors } from '../constants/theme';
import NavItem from './NavItem';

const Sidebar = () => (
  <div style={styles.sidebar}>
    <div>
      <div style={styles.sidebarHeader}>
        <img
          src="https://i.pravatar.cc/150?img=0"
          alt="Admin Avatar"
          style={styles.sidebarLogo}
        />
        <div>
          <div style={styles.sidebarTitle}>Admin</div>
          <div style={styles.sidebarSubtitle}>Daily Dine</div>
        </div>
      </div>

      <div style={styles.nav}>
        <NavItem icon={<MdDashboard />} label="Dashboard" />
        <NavItem icon={<MdStorefront />} label="Mess Owners" />
        <NavItem icon={<MdGroup />} label="Customers" />
        <NavItem icon={<MdMarkEmailUnread />} label="Queries" active />
      </div>
    </div>

    <div>
      <button style={styles.logoutButton}>Logout</button>
      <div style={{ marginTop: 16 }}>
        <NavItem icon={<MdSettings />} label="Settings" />
        <NavItem icon={<MdHelpOutline />} label="Support" />
      </div>
    </div>
  </div>
);

const styles = {
  sidebar: {
    width: 250,
    backgroundColor: colors.white,
    borderRight: `1px solid ${colors.border}`,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 32,
  },
  sidebarLogo: {
    width: 40,
    height: 40,
    borderRadius: '50%',
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  sidebarSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  logoutButton: {
    backgroundColor: colors.primary,
    color: colors.white,
    height: 40,
    borderRadius: 8,
    border: 'none',
    width: '100%',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Sidebar;
