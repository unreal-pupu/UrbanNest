import React, { useState } from 'react';
import { FaWineGlassAlt, FaUtensils, FaBed, FaCalendarAlt } from 'react-icons/fa';

const ReservationManagement = () => {
  const [reservationType, setReservationType] = useState('restaurant'); 
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    roomType: 'Single',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails({
      ...reservationDetails,
      [name]: value,
    });
  };

  const handleReservationTypeChange = (type) => {
    setReservationType(type);
    setReservationDetails({
      ...reservationDetails,
      guests: 1, 
      roomType: 'Single', 
    });
  };

  const handleSubmitReservation = () => {
    alert('Your reservation has been successfully submitted!');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Reservation Management
      </h2>

      <div className="flex justify-center space-x-6 mb-8">
        <button
          className={`py-3 px-6 flex items-center space-x-2 border-2 rounded-lg ${reservationType === 'restaurant' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
          onClick={() => handleReservationTypeChange('restaurant')}
        >
          <FaUtensils />
          <span>Restaurant</span>
        </button>
        <button
          className={`py-3 px-6 flex items-center space-x-2 border-2 rounded-lg ${reservationType === 'bar' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
          onClick={() => handleReservationTypeChange('bar')}
        >
          <FaWineGlassAlt />
          <span>Bar</span>
        </button>
        <button
          className={`py-3 px-6 flex items-center space-x-2 border-2 rounded-lg ${reservationType === 'hotel' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
          onClick={() => handleReservationTypeChange('hotel')}
        >
          <FaBed />
          <span>Hotel</span>
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <form>
          <label className="block text-lg font-medium text-gray-800 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={reservationDetails.name}
            onChange={handleInputChange}
            className="w-full border-2 rounded-lg py-2 px-4 mb-4"
            placeholder="Enter your name"
          />

          <label className="block text-lg font-medium text-gray-800 mb-2">Reservation Date</label>
          <div className="flex items-center space-x-2 mb-4">
            <FaCalendarAlt className="text-gray-400" />
            <input
              type="date"
              name="date"
              value={reservationDetails.date}
              onChange={handleInputChange}
              className="w-full border-2 rounded-lg py-2 px-4"
            />
          </div>

          {reservationType === 'restaurant' || reservationType === 'bar' ? (
            <>
              <label className="block text-lg font-medium text-gray-800 mb-2">Reservation Time</label>
              <input
                type="time"
                name="time"
                value={reservationDetails.time}
                onChange={handleInputChange}
                className="w-full border-2 rounded-lg py-2 px-4 mb-4"
              />

              <label className="block text-lg font-medium text-gray-800 mb-2">Number of Guests</label>
              <input
                type="number"
                name="guests"
                value={reservationDetails.guests}
                onChange={handleInputChange}
                className="w-full border-2 rounded-lg py-2 px-4 mb-4"
                min="1"
              />
            </>
          ) : reservationType === 'hotel' ? (
            <>
              <label className="block text-lg font-medium text-gray-800 mb-2">Room Type</label>
              <select
                name="roomType"
                value={reservationDetails.roomType}
                onChange={handleInputChange}
                className="w-full border-2 rounded-lg py-2 px-4 mb-4"
              >
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
              </select>
            </>
          ) : null}

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSubmitReservation}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationManagement;