import React from 'react';
import StatusBadge from '../components/StatusBadge';

const CustomersScreen = () => {
  return (
    <div id="customers-section">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Customer Management
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800">Total Customers</h4>
              <p className="text-2xl font-bold text-orange-700 mt-2">1,847</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800">
                Active Subscriptions
              </h4>
              <p className="text-2xl font-bold text-orange-700 mt-2">1,234</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800">New This Month</h4>
              <p className="text-2xl font-bold text-orange-700 mt-2">156</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">PS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">
                    priya.sharma@email.com • Active since Jan 2024
                  </p>
                  <p className="text-xs text-gray-400">
                    Subscribed to: Raj's Kitchen (Monthly Plan)
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <StatusBadge text="Active" type="active" />
                <button className="text-orange-700 hover:text-orange-900">
                  View Profile
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">AK</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Amit Kumar</h4>
                  <p className="text-sm text-gray-500">
                    amit.kumar@email.com • Active since Dec 2023
                  </p>
                  <p className="text-xs text-gray-400">
                    Subscribed to: Spice Master (Daily Plan)
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <StatusBadge text="Active" type="active" />
                <button className="text-orange-700 hover:text-orange-900">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersScreen;