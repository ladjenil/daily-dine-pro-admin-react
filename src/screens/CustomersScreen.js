import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import { GLOBAL_STYLES } from '../constants/styles';
import { DATA } from '../constants/data';

export default function CustomersScreen() {
  return (
    <div style={GLOBAL_STYLES.container}>
      <Header title="Customers" />
      <Table rows={DATA.customers} />
    </div>
  );
}
