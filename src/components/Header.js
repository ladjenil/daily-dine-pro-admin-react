import React from 'react';

const Header = ({ activeScreen }) => {
  // This object replaces the title mapping from your script
  const titles = {
    dashboard: 'Dashboard',
    'mess-owners': 'Mess Owners',
    customers: 'Customers',
    queries: 'Queries & Messages',
    verification: 'Verification Center',
  };

  const pageTitle = titles[activeScreen] || 'Dashboard';

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 id="page-title" className="text-2xl font-semibold text-gray-800">
            {pageTitle}
          </h2>
          <p id="welcome-message" className="text-gray-600 mt-1">
            Welcome to your admin dashboard
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          <button className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors">
            Settings
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;