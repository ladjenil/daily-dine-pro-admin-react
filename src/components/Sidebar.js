import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUserFriends, FaUtensils, FaQuestionCircle } from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard", icon: <FaHome /> },
    { path: "/customers", label: "Customers", icon: <FaUserFriends /> },
    { path: "/mess-owners", label: "Mess Owners", icon: <FaUtensils /> },
    { path: "/queries", label: "Queries", icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="sidebar">
      <h1>DailyDine Admin</h1>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
