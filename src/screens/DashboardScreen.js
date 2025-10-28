import React from "react";
import { FaUsers, FaUtensils, FaClipboardList, FaQuestionCircle } from "react-icons/fa";

export default function DashboardScreen() {
  const stats = [
    {
      id: 1,
      title: "Total Customers",
      value: "1,245",
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "Mess Owners",
      value: "86",
      icon: <FaUtensils className="text-green-500 text-3xl" />,
      color: "bg-green-50",
    },
    {
      id: 3,
      title: "Daily Menus",
      value: "320",
      icon: <FaClipboardList className="text-yellow-500 text-3xl" />,
      color: "bg-yellow-50",
    },
    {
      id: 4,
      title: "Pending Queries",
      value: "18",
      icon: <FaQuestionCircle className="text-red-500 text-3xl" />,
      color: "bg-red-50",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className={`${item.color} p-6 rounded-xl shadow hover:shadow-md transition`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-600">{item.title}</h2>
                <p className="text-2xl font-bold text-gray-800 mt-2">{item.value}</p>
              </div>
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between">
            <span>New customer registered: <strong>Riya Patel</strong></span>
            <span className="text-gray-500 text-sm">5 mins ago</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Mess owner updated menu: <strong>Tasty Tiffins</strong></span>
            <span className="text-gray-500 text-sm">25 mins ago</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>New query received from <strong>John D.</strong></span>
            <span className="text-gray-500 text-sm">1 hr ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
