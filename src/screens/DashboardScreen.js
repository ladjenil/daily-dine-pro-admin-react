import React from 'react';
import MetricCard from '../components/MetricCard';
import StatusBadge from '../components/StatusBadge';

const DashboardScreen = () => {
  return (
    <div id="dashboard-section">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Mess Owners"
          value="247"
          change="↗ +12% from last month"
          cardClass="" // No extra class needed
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
            </svg>
          }
        />
        <MetricCard
          title="Active Customers"
          value="1,847"
          change="↗ +8% from last month"
          cardClass="blue" // This class exists in your CSS
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          }
        />
        <MetricCard
          title="Pending Verifications"
          value="23"
          note="Requires attention"
          cardClass="green" // This class exists in your CSS
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
        />
        <MetricCard
          title="Open Queries"
          value="12"
          change="↓ -3 from yesterday"
          cardClass="orange" // This class exists in your CSS
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          }
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Mess Owner Applications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    RK
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">Raj's Kitchen</p>
                  <p className="text-sm text-gray-500">Applied 2 hours ago</p>
                </div>
              </div>
              <StatusBadge text="Pending" type="pending" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    SM
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">Spice Master</p>
                  <p className="text-sm text-gray-500">Applied 5 hours ago</p>
                </div>
              </div>
              <StatusBadge text="Approved" type="approved" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">
                    HD
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">Home Delights</p>
                  <p className="text-sm text-gray-500">Applied 1 day ago</p>
                </div>
              </div>
              <StatusBadge text="Under Review" type="under-review" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            System Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="status-dot bg-green-500 mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">
                  New customer registration
                </p>
                <p className="text-sm text-gray-500">
                  Priya Sharma joined the platform
                </p>
                <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="status-dot bg-blue-500 mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Mess owner verified</p>
                <p className="text-sm text-gray-500">
                  Tasty Bites has been approved
                </p>
                <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="status-dot bg-yellow-500 mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Query received</p>
                <p className="text-sm text-gray-500">
                  Customer complaint about meal quality
                </p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="status-dot bg-red-500 mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Account suspended</p>
                <p className="text-sm text-gray-500">
                  Mess owner violated terms of service
                </p>
                <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;