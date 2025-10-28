import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Customers", path: "/customers" },
  { name: "Mess Owners", path: "/mess-owners" },
  { name: "Daily Menu", path: "/daily-menu" },
  { name: "Queries", path: "/queries" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
      <div className="text-2xl font-bold text-blue-600 p-6 border-b">
        DailyDine Admin
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg text-gray-700 font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100 hover:text-blue-500"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
