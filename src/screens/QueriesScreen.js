import React from 'react';
import StatusBadge from '../components/StatusBadge';
import ReplyButton from '../components/ReplyButton';

const QueriesScreen = () => {
  return (
    <div id="queries-section">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Queries & Messages
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <StatusBadge text="High Priority" type="high-priority" />
                    <span className="ml-2 text-sm text-gray-500">
                      2 hours ago
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Food Quality Complaint
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Customer reports poor food quality from "Tasty Bites".
                    Multiple complaints received.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    From: customer@email.com • Mess: Tasty Bites
                  </p>
                </div>
                <ReplyButton />
              </div>
            </div>
            <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <StatusBadge
                      text="Medium Priority"
                      type="medium-priority"
                    />
                    <span className="ml-2 text-sm text-gray-500">
                      5 hours ago
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900">Payment Issue</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Customer unable to complete payment for monthly
                    subscription.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    From: user@email.com • Mess: Home Delights
                  </p>
                </div>
                <ReplyButton />
              </div>
            </div>
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <StatusBadge text="Resolved" type="resolved" />
                    <span className="ml-2 text-sm text-gray-500">
                      1 day ago
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Menu Update Request
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Mess owner requesting help with menu updates on the
                    platform.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    From: owner@email.com • Mess: Raj's Kitchen
                  </p>
                </div>
                <span className="ml-4 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueriesScreen;