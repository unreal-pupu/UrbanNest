import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HOTELG from '../../assets/HOTELG.jpg'; 

const Reservation = () => {
  const location = useLocation();
  const hotelDetails = location.state?.hotel || { 
    name: "Grand Paradise Hotel", 
    location: "123 Beachfront Road, Miami, FL", 
    img: HOTELG, 
    description: "Experience luxury and comfort at Grand Paradise Hotel, offering breathtaking ocean views and world-class amenities." // Hotel Description
  };

  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    alert('Reservation successfully made!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <img 
          src={hotelDetails.img} 
          alt={hotelDetails.name} 
          className="w-full h-64 object-cover rounded-lg mb-4" 
        />
        <h2 className="text-3xl font-bold">{hotelDetails.name}</h2>
        <p className="text-xl text-gray-600">{hotelDetails.location}</p>
        <p className="mt-2 text-gray-800">{hotelDetails.description}</p>
      </div>

      <form onSubmit={handleReservationSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Special Requests</label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Any special requests?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#352208] text-[#e1bb80] py-2 px-4 rounded-md hover:bg-[#e1bb80] hover:text-[#352208] transition duration-300"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default Reservation;