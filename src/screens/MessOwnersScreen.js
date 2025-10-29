import React from 'react';
import StatusBadge from '../components/StatusBadge';
import ActionButton from '../components/ActionButton';

const MessOwnersScreen = () => {
  return (
    <div id="mess-owners-section">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Mess Owners Management
            </h3>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Search mess owners..."
                className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 focus:ring-2 focus:ring-orange-700 focus:border-transparent"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 focus:ring-2 focus:ring-orange-700">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Suspended</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mess Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="table-row">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        RK
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Raj's Kitchen
                      </div>
                      <div className="text-sm text-gray-500">
                        raj.kitchen@email.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Mumbai, MH
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  142
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge text="Active" type="active" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jan 15, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <ActionButton
                    actionText="View"
                    className="text-orange-700 hover:text-orange-900"
                  />
                  <ActionButton
                    actionText="Suspend"
                    className="text-orange-600 hover:text-orange-800"
                  />
                  <ActionButton
                    actionText="Delete"
                    className="text-red-600 hover:text-red-900"
                  />
                </td>
              </tr>
              <tr className="table-row">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">
                        SM
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Spice Master
                      </div>
                      <div className="text-sm text-gray-500">
                        spice.master@email.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Delhi, DL
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  89
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge text="Pending" type="pending" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jan 20, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <ActionButton
                    actionText="View"
                    className="text-orange-700 hover:text-orange-900"
                  />
                  <ActionButton
                    actionText="Approve"
                    className="text-green-600 hover:text-green-900"
                  />
                  <ActionButton
                    actionText="Reject"
                    className="text-red-600 hover:text-red-900"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MessOwnersScreen;