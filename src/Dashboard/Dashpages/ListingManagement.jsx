import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import GRAND from '../../assets/GRAND.jpg'
import ASPEN from '../../assets/ASPEN.jpg'
import MREST from '../../assets/MREST.jpg'


const hotelsData = [
  {
    id: 1,
    name: 'Grand Plaza Hotel',
    price: 150,
    description: 'A luxurious stay with world-class amenities.',
    location: 'New York, USA',
    rating: 4.5,
    image: GRAND, 
  },
  {
    id: 2,
    name: 'Seaside Resort',
    price: 200,
    description: 'Relax by the beach with stunning ocean views.',
    location: 'Miami, USA',
    rating: 4.7,
    image: MREST, 
  },
  {
    id: 3,
    name: 'Mountain Escape',
    price: 120,
    description: 'A peaceful getaway in the serene mountains.',
    location: 'Aspen, USA',
    rating: 4.2,
    image: ASPEN, 
  },
];

const ListingManagement = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    alert(`You have selected ${hotel.name} for booking.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-[#352208] mb-8">Explore Our Hotels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotelsData.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover transform transition-transform hover:scale-110 duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#352208] hover:text-[#e1bb80] transition-colors">{hotel.name}</h3>
              <p className="text-gray-500 text-sm flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-400" />
                {hotel.location}
              </p>

              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-yellow-400 ${index < Math.floor(hotel.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({hotel.rating})</span>
              </div>

              <p className="text-gray-600 mt-4">{hotel.description}</p>

              <div className="flex justify-between items-center mt-6">
                <span className="text-lg font-semibold text-gray-800">${hotel.price} / night</span>
                <button
                  onClick={() => handleBookNow(hotel)}
                  className="bg-[#352208] text-[#e1bb80] py-2 px-6 rounded-lg hover:bg-[#e1bb80]  hover:text-[#352208] transition-all ease-in-out duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            You have selected <span className="font-bold">{selectedHotel.name}</span> for booking!
          </h3>
        </div>
      )}
    </div>
  );
};

export default ListingManagement;