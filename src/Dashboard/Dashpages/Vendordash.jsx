import React, { useState } from "react";
import { FaDollarSign,FaHotel,FaUtensils,FaWineGlassAlt,FaShoppingCart,FaStar,FaChartBar} from "react-icons/fa";


const Vendordash = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#352208]">Welcome to your Dashboard</h1>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "overview" ? "bg-[#352208] text-[#e1bb80]" : "bg-[#e1bb80] text-[#352208] border"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("restaurants")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "restaurants" ? "bg-[#352208] text-[#e1bb80]" : "bg-[#e1bb80] text-[#352208] border"
          }`}
        >
          Restaurants
        </button>
        <button
          onClick={() => setActiveTab("bars")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "bars" ? "bg-[#352208] text-[#e1bb80]" : "bg-[#e1bb80] text-[#352208] border"
          }`}
        >
          Bars
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "hotels" ? "bg-[#352208] text-[#e1bb80]" : "bg-[#e1bb80] text-[#352208] border"
          }`}
        >
          Hotels
        </button>
      </div>

      {activeTab === "overview" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4">
              <FaDollarSign className="text-[#352208] w-8 h-8" />
              <div>
                <p className="text-sm text-[#352208]">Total Revenue</p>
                <p className="text-xl font-semibold">$12,450</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4">
              <FaShoppingCart className="text-[#352208] w-8 h-8" />
              <div>
                <p className="text-sm text-[#352208]">Orders</p>
                <p className="text-xl font-semibold">328</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4">
              <FaStar className="text-[#352208] w-8 h-8" />
              <div>
                <p className="text-sm text-[#352208]">Avg. Rating</p>
                <p className="text-xl font-semibold">4.6</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4">
              <FaChartBar className="text-[#352208] w-8 h-8" />
              <div>
                <p className="text-sm text-[#352208]">Views</p>
                <p className="text-xl font-semibold">1,283</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 text-[#352208]">Recent Orders</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Order #1021</span>
                <span>$85.00</span>
                <span>Delivered</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Order #1020</span>
                <span>$48.50</span>
                <span>Preparing</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Order #1019</span>
                <span>$22.00</span>
                <span>Cancelled</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#352208] text-[#e1bb80] px-4 py-2 rounded">Add New Restaurant</button>
              <button className="bg-[#352208] text-[#e1bb80] px-4 py-2 rounded">Add New Bar</button>
              <button className="bg-[#352208] text-[#e1bb80] px-4 py-2 rounded">Add New Hotel</button>
              <button className="bg-[#352208] text-[#e1bb80] px-4 py-2 rounded">View Sales Report</button>
            </div>
          </div>
        </>
      )}

      {activeTab === "restaurants" && (
        <div className="bg-white p-6 shadow rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Manage Your Restaurants</h2>
          <button className="bg-black text-white px-4 py-2 rounded mb-4">Add New Restaurant</button>
          <div className="text-gray-500">List of restaurants will go here...</div>
        </div>
      )}

      {activeTab === "bars" && (
        <div className="bg-white p-6 shadow rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Manage Your Bars</h2>
          <button className="bg-black text-white px-4 py-2 rounded mb-4">Add New Bar</button>
          <div className="text-gray-500">List of bars will go here...</div>
        </div>
      )}

      {activeTab === "hotels" && (
        <div className="bg-white p-6 shadow rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Manage Your Hotels</h2>
          <button className="bg-black text-white px-4 py-2 rounded mb-4">Add New Hotel</button>
          <div className="text-gray-500">List of hotels will go here...</div>
        </div>
      )}
    </div>
    </>
  )
}

export default Vendordash