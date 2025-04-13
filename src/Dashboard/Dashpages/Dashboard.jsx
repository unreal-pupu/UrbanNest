/* eslint-disable no-unused-vars */
import React from 'react'
import { BarChart2, Hotel, Utensils, Wine } from "lucide-react";
import { Outlet, NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar'




const Card = ({ title, subtitle, description, color }) => (
  <div
    className={`rounded-xl shadow-md p-6 ${color} hover:scale-[1.02] transform transition-all duration-300`}
  >
    <h2 className="text-xl font-bold mb-1">{title}</h2>
    <h3 className="text-md text-gray-700 font-medium mb-2">{subtitle}</h3>
    <p className="text-sm text-gray-800">{description}</p>
  </div>
);


const Dashboard = () => {
  return (
   <>
    <main className="w-full min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Welcome to Your Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card
          title="Explore Food Vendors"
          subtitle="Top-rated restaurants"
          description="Find the best meals near you, including local favorites and trending cuisines."
          color="bg-yellow-100"
        />
        <Card
          title="Discover Bars"
          subtitle="Nightlife & Lounges"
          description="Explore great places to unwind, from classy lounges to energetic nightclubs."
          color="bg-red-100"
        />
        <Card
          title="Book Hotels"
          subtitle="Comfort & Convenience"
          description="Choose from luxury suites to budget stays. View amenities and make bookings."
          color="bg-green-100"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card
          title="Saved Places"
          subtitle="Quick Access"
          description="View and manage your favorite spots for easier future access and faster bookings."
          color="bg-blue-100"
        />
        <Card
          title="Recommended For You"
          subtitle="Tailored Suggestions"
          description="Based on your activity, here are hand-picked spots you might love to try."
          color="bg-purple-100"
        />
        <Card
          title="Nearby Deals"
          subtitle="Hot Offers"
          description="Check out time-limited discounts on food, drinks, and accommodation."
          color="bg-pink-100"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Trending Now"
          subtitle="Popular Choices"
          description="See what’s currently buzzing in your area—food, drinks, and more."
          color="bg-orange-100"
        />
        <Card
          title="Recently Visited"
          subtitle="Your Activity"
          description="Quickly revisit places you’ve recently interacted with or booked."
          color="bg-emerald-100"
        />
        <Card
          title="Upcoming Bookings"
          subtitle="Stay Organized"
          description="View your upcoming hotel stays, reservations, and event entries."
          color="bg-indigo-100"
        />
        <Card
          title="Loyalty Points"
          subtitle="Earn & Redeem"
          description="Track your points and discover exciting rewards you can redeem."
          color="bg-teal-100"
        />
      </div>
    </main>
   
   </>
    
    
   

  )
}

export default Dashboard