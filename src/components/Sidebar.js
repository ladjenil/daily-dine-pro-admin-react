import React from 'react';

// Helper component for sidebar items
const SidebarItem = ({
  screen,
  icon,
  text,
  activeScreen,
  setActiveScreen,
}) => (
  <div
    className={`sidebar-item px-6 py-3 cursor-pointer ${
      activeScreen === screen ? 'active' : ''
    }`}
    onClick={() => setActiveScreen(screen)}
  >
    <div className="flex items-center">
      {icon}
      {text}
    </div>
  </div>
);

const Sidebar = ({ activeScreen, setActiveScreen }) => {
  return (
    <div className="w-64 gradient-bg text-white shadow-xl relative">
      <div className="p-6">
        <h1 id="platform-name" className="text-2xl font-bold mb-2">
          Daily Dine
        </h1>
        <p className="text-orange-100 text-sm">Admin Dashboard</p>
      </div>
      <nav className="mt-8">
        <SidebarItem
          screen="dashboard"
          text="Dashboard"
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          icon={
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
          }
        />
        <SidebarItem
          screen="mess-owners"
          text="Mess Owners"
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          icon={
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
            </svg>
          }
        />
        <SidebarItem
          screen="customers"
          text="Customers"
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          icon={
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          }
        />
        <SidebarItem
          screen="queries"
          text="Queries & Messages"
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          icon={
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          }
        />
        <SidebarItem
          screen="verification"
          text="Verification"
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          icon={
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
        />
      </nav>
      <div className="absolute bottom-0 w-64 p-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">A</span>
          </div>
          <div className="ml-3">
            <p id="admin-name" className="text-sm font-medium">
              Admin User
            </p>
            <p className="text-xs text-orange-100">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;