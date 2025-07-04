import React, { useEffect, useState } from 'react';
import DashboardLayout from './DashboardLayout';
import api from '../../api';

const CustomerDashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await api.get('/users/types');
        const primaryType = response.data.userTypes?.find(type => type.isPrimary);
        setUsername(primaryType?.username || '');
      } catch (error) {
        setUsername('');
      }
    };
    fetchUsername();
  }, []);

  return (
    <DashboardLayout username={username}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Bookings */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">My Bookings</h3>
            <div className="mt-4">
              <p className="text-gray-500">No bookings yet</p>
            </div>
          </div>
        </div>

        {/* Recommended Events */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Recommended Events</h3>
            <div className="mt-4">
              <p className="text-gray-500">No recommendations yet</p>
            </div>
          </div>
        </div>

        {/* Account Statistics */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Statistics</h3>
            <div className="mt-4 space-y-2">
              <p className="text-gray-500">Total Bookings: 0</p>
              <p className="text-gray-500">Events Attended: 0</p>
              <p className="text-gray-500">Reviews: 0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
            Browse Events
          </button>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
            View Bookings
          </button>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
            Update Profile
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard; 