import React, { useState, useEffect } from 'react';
import './App.css';

import { colors } from './constants/theme';
import { queriesData, selectedQueryDetails } from './data/mockData';
import Sidebar from './components/Sidebar';
import InboxList from './components/InboxList';
import ChatView from './components/ChatView';

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth });
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

const App = () => {
  const { width } = useWindowSize();
  const [selectedQuery, setSelectedQuery] = useState(queriesData[0]);

  const handleSelectQuery = (query) => setSelectedQuery(query);
  const isTablet = width > 768;

  return (
    <div style={styles.safeArea}>
      <div style={styles.container}>
        {isTablet && <Sidebar />}
        <InboxList
          data={queriesData}
          onSelect={handleSelectQuery}
          selectedQueryId={selectedQuery.id}
        />
        {isTablet && <ChatView query={selectedQueryDetails} />}
      </div>
    </div>
  );
};

const styles = {
  safeArea: {
    backgroundColor: colors.background,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
};

export default App;
