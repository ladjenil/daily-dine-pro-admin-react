import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import DashboardScreen from "./screens/DashboardScreen";
import CustomersScreen from "./screens/CustomersScreen";
import CustomerDetailsScreen from "./screens/CustomerDetailsScreen";
import MessOwnersScreen from "./screens/MessOwnersScreen";
import MessOwnerDetailScreen from "./screens/MessOwnerDetailScreen";
import DailyMenuScreen from "./screens/DailyMenuScreen";
import QueriesScreen from "./screens/QueriesScreen";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardScreen />} />
            <Route path="/customers" element={<CustomersScreen />} />
            <Route path="/customers/:id" element={<CustomerDetailsScreen />} />
            <Route path="/mess-owners" element={<MessOwnersScreen />} />
            <Route path="/mess-owners/:id" element={<MessOwnerDetailScreen />} />
            <Route path="/daily-menu" element={<DailyMenuScreen />} />
            <Route path="/queries" element={<QueriesScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
