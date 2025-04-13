import React, { useState } from 'react';
import { FaChartLine, FaUsers, FaDollarSign, } from 'react-icons/fa';

const AnalyticsReports = () => {
  const [statsData, setStatsData] = useState({
    totalReservations: 120,
    totalRevenue: 5000,
    totalCustomers: 150,
    month: 'March 2025',
  });

  const reservationData = [
    { name: 'Restaurant', bookings: 60, revenue: 3000 },
    { name: 'Bar', bookings: 30, revenue: 1500 },
    { name: 'Hotel', bookings: 30, revenue: 1500 },
  ];

  const handleMonthChange = (e) => {
    setStatsData({
      ...statsData,
      month: e.target.value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-[#352208] mb-12">
        Analytical Reports
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <FaUsers className="text-[#352208] text-3xl" />
          <div>
            <h4 className="text-xl font-semibold text-gray-700">Total Reservations</h4>
            <p className="text-3xl font-bold text-gray-900">{statsData.totalReservations}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <FaDollarSign className="text-[#352208] text-3xl" />
          <div>
            <h4 className="text-xl font-semibold text-gray-700">Total Revenue</h4>
            <p className="text-3xl font-bold text-gray-900">${statsData.totalRevenue}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
          <FaUsers className="text-[#352208] text-3xl" />
          <div>
            <h4 className="text-xl font-semibold text-gray-700">Total Customers</h4>
            <p className="text-3xl font-bold text-gray-900">{statsData.totalCustomers}</p>
          </div>
        </div>
      </div>


      <div className="mb-8 text-center">
        <label htmlFor="month" className="text-lg font-medium text-gray-800">
          Select Month
        </label>
        <select
          id="month"
          value={statsData.month}
          onChange={handleMonthChange}
          className="border-2 rounded-lg py-2 px-4 ml-4"
        >
          <option value="March 2025">March 2025</option>
          <option value="April 2025">April 2025</option>
          <option value="May 2025">May 2025</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-[#352208] mb-4">Bookings by Type</h3>
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Bookings</th>
                <th className="py-2 px-4 text-left">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {reservationData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.bookings}</td>
                  <td className="py-2 px-4">${item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Revenue by Category</h3>
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">Restaurant</td>
                <td className="py-2 px-4">$3000</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">Bar</td>
                <td className="py-2 px-4">$1500</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">Hotel</td>
                <td className="py-2 px-4">$1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Performance Over Time</h3>
        <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center text-gray-600">
          <FaChartLine className="text-6xl" />
          <p className="text-xl">Chart Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;