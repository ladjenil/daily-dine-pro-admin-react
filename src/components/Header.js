import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-sm border-b">
      <h1 className="text-lg font-semibold text-gray-700">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Admin"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
