import React from "react";
import { FaUsers, FaUtensils, FaClipboardList, FaQuestionCircle } from "react-icons/fa";

export default function DashboardScreen() {
  const stats = [
    { title: "Total Customers", value: "1,245", icon: <FaUsers /> },
    { title: "Mess Owners", value: "86", icon: <FaUtensils /> },
    { title: "Daily Menus", value: "320", icon: <FaClipboardList /> },
    { title: "Pending Queries", value: "18", icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-cards">
        {stats.map((item, index) => (
          <div key={index} className="dashboard-card">
            <p className="card-title">{item.title}</p>
            <p className="card-value">{item.value}</p>
            <div style={{ fontSize: "26px", marginTop: "10px" }}>{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
