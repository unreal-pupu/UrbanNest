import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";  
import { Link } from "react-router-dom";  
import DEST3 from '../../assets/DEST3.jpg';
import DEST4 from '../../assets/DEST4.jpg';
import DEST5 from '../../assets/DEST5.jpg';
import DEST6 from '../../assets/DEST6.jpg';
import DEST7 from '../../assets/DEST7.jpg';
import DEST8 from '../../assets/DEST8.jpg';
import CHEF3 from '../../assets/CHEF3.jpg';
import CHEF4 from '../../assets/CHEF4.jpg';
import CHEF5 from '../../assets/CHEF5.jpg';


const favorites = [
  { name: "Chef's Special", type: "Restaurant", image: CHEF3, id: 1 },
  { name: "Sunset Lounge", type: "Bar", image: DEST3, id: 2 },
  { name: "Moonlit Bistro", type: "Restaurant", image: CHEF4, id: 3 },
  { name: "Neon Tavern", type: "Bar", image: DEST4, id: 4 },
  { name: "Tropical Treats", type: "Food Vendor", image: DEST5, id: 5 },
  { name: "Platinum Bar", type: "Bar", image: DEST6, id: 6 },
  { name: "Spicy Diner", type: "Restaurant", image: CHEF5, id: 7 },
  { name: "The Cozy Corner", type: "Restaurant", image: DEST7, id: 8 },
  { name: "Eclipse Lounge", type: "Bar", image: DEST8, id: 9 },
];

const Favorites = () => {
  const [favoritesList, setFavoritesList] = useState(favorites);

  const removeFavorite = (id) => {
    setFavoritesList(favoritesList.filter(fav => fav.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#352208] mb-8">Your Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoritesList.map((fav, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src={fav.image} alt={fav.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{fav.name}</h2>
                <button
                  onClick={() => removeFavorite(fav.id)}
                  className="text-red-500 text-xl"
                >
                  <FaHeart />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-2">{fav.type}</p>
              <Link to={`/${fav.type.toLowerCase()}`} className="text-[#352208] hover:text-[#e1bb80]">
                Visit {fav.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;