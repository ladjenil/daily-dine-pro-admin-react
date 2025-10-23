import React from 'react';
import { MdSearch, MdExpandMore } from 'react-icons/md';
import { colors } from '../constants/theme';
import QueryItem from './QueryItem';

const InboxList = ({ data, onSelect, selectedQueryId }) => {
  return (
    <div style={styles.inboxContainer}>
      <div style={styles.inboxHeader}>
        <div style={styles.inboxTitle}>Inbox</div>

        <div style={styles.searchContainer}>
          <MdSearch size={22} color={colors.textSecondary} />
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
          />
        </div>

        <div style={styles.filterContainer}>
          <button style={styles.filterButton}>
            <span>Status: Unread</span>
            <MdExpandMore size={18} color={colors.textSecondary} />
          </button>
          <button style={styles.filterButton}>
            <span>User Type: All</span>
            <MdExpandMore size={18} color={colors.textSecondary} />
          </button>
        </div>
      </div>

      <div>
        {data.map((item) => (
          <QueryItem
            key={item.id}
            item={item}
            onSelect={onSelect}
            isSelected={item.id === selectedQueryId}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  inboxContainer: {
    flex: 1.2,
    backgroundColor: colors.white,
    borderRight: `1px solid ${colors.border}`,
    display: 'flex',
    flexDirection: 'column',
  },
  inboxHeader: {
    padding: 16,
    borderBottom: `1px solid ${colors.border}`,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  inboxTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.textfieldFill,
    borderRadius: 8,
    padding: '0 12px',
    height: 44,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 14,
    color: colors.text,
    backgroundColor: 'transparent',
  },
  filterContainer: {
    display: 'flex',
    gap: 8,
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.textfieldFill,
    padding: '0 12px',
    height: 32,
    borderRadius: 8,
    gap: 4,
    border: 'none',
    cursor: 'pointer',
  },
};

export default InboxList;
