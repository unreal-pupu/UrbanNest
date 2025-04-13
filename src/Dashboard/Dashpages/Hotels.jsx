import React from 'react';
import { Link } from 'react-router-dom';
import HOTELA from '../../assets/HOTELA.jpg';
import HOTELB from '../../assets/HOTELB.jpg';
import HOTELC from '../../assets/HOTELC.jpg';
import HOTELD from '../../assets/HOTELD.jpg';
import HOTELE from '../../assets/HOTELE.jpg';
import HOTELF from '../../assets/HOTELF.jpg';
import HOTELG from '../../assets/HOTELG.jpg';
import HOTELH from '../../assets/HOTELH.jpg';
import HOTELI from '../../assets/HOTELI.jpg';
import HOTELJ from '../../assets/HOTELJ.jpg';
import HOTELK from '../../assets/HOTELK.jpg';
import HOTELL from '../../assets/HOTELL.jpg';
import HOTELM from '../../assets/HOTELM.jpg';
import HOTELN from '../../assets/HOTELN.jpg';
import HOTELO from '../../assets/HOTELO.jpg';
import HOTELP from '../../assets/HOTELP.jpg';
import HOTELW from '../../assets/HOTELW.jpg';
import HOTELU from '../../assets/HOTELU.jpg';
import HOTELV from '../../assets/HOTELV.jpg';

const Hotels = () => {
  const hotelData = [
    { name: "The Grand View", img: HOTELA, location: "New York" },
    { name: "Ocean Breeze", img: HOTELB, location: "California" },
    { name: "Mountain Escape", img: HOTELC, location: "Colorado" },
    { name: "Sunset Paradise", img: HOTELD, location: "Hawaii" },
    { name: "City Lights", img: HOTELE, location: "Chicago" },
    { name: "Luxe Stay", img: HOTELF, location: "Los Angeles" },
    { name: "Forest Retreat", img: HOTELG, location: "Oregon" },
    { name: "Desert Oasis", img: HOTELH, location: "Arizona" },
    { name: "The Cliffside", img: HOTELI, location: "Nevada" },
    { name: "Urban Escape", img: HOTELJ, location: "San Francisco" },
    { name: "Lakeside Haven", img: HOTELK, location: "Minnesota" },
    { name: "Coastal Breeze", img: HOTELL, location: "Florida" },
    { name: "Mountain High", img: HOTELM, location: "Utah" },
    { name: "Seaside Retreat", img: HOTELN, location: "Maine" },
    { name: "Luxury Towers", img: HOTELO, location: "Seattle" },
    { name: "The Retreat", img: HOTELP, location: "South Carolina" },
    { name: "The Royal Stay", img: HOTELW, location: "Texas" },
    { name: "Skyline Views", img: HOTELU, location: "Washington, D.C." },
    { name: "Paradise View", img: HOTELV, location: "Florida Keys" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {hotelData.map((hotel, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={hotel.img} alt={hotel.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.location}</p>
            <Link to="/dashboard/reservation" className="mt-4 inline-block bg-[#352208] text-[#e1bb80] py-2 px-4 rounded-lg hover:bg-[#e1bb80] hover:text-[#352208] transition">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;