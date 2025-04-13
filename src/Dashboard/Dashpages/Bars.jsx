import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import DRA from "../../assets/DRA.jpg";
import DRB from "../../assets/DRB.jpg";
import DRC from "../../assets/DRC.jpg";
import DRD from "../../assets/DRD.jpg";
import DRE from "../../assets/DRE.jpg";
import DRF from "../../assets/DRF.jpg";
import DRG from "../../assets/DRG.jpg";
import DRH from "../../assets/DRH.jpg";
import DRI from "../../assets/DRI.jpg";
import DBBBB from "../../assets/DBBBB.jpg";
import DBBBC from "../../assets/DBBBC.jpg";
import DRR from "../../assets/DRR.jpg";
import DRS from "../../assets/DRS.jpg";
import DRT from "../../assets/DRT.jpg";
import DRU from "../../assets/DRU.jpg";
import DRV from "../../assets/DRV.jpg";
import DRW from "../../assets/DRW.jpg";
import DRX from "../../assets/DRX.jpg";
import DRY from "../../assets/DRY.jpg";
import HF from "../../assets/HF.jpg";


const bars = [
  { name: "The Red Lounge", description: "Exotic cocktails and modern vibes.", image: DRB, rating: 4.5, id: 1, isOpen: true },
  { name: "Moonlit Bar", description: "Scenic city view with relaxing ambiance.", image: DRT, rating: 4.0, id: 2, isOpen: false },
  { name: "Vibe Bar", description: "Great music and nightlife atmosphere.", image: DRC, rating: 4.7, id: 3, isOpen: true },
  { name: "Whiskey Haven", description: "Cozy atmosphere for whiskey lovers.", image: HF, rating: 4.2, id: 4, isOpen: false },
  { name: "Speakeasy Bar", description: "Craft cocktails in a vintage setting.", image: DRD, rating: 4.8, id: 5, isOpen: true },
  { name: "Tiki Bar", description: "Tropical drinks and beach vibes.", image: DRE, rating: 4.3, id: 6, isOpen: false },
  { name: "Velvet Bar", description: "Luxurious bar with velvet décor.", image: DRF, rating: 4.6, id: 7, isOpen: true },
  { name: "Neon Lounge", description: "A neon-lit lounge with music and dance.", image: DRH, rating: 4.4, id: 8, isOpen: true },
  { name: "Sunset Bar", description: "Enjoy sunset views with your favorite drinks.", image: DRI, rating: 4.1, id: 9, isOpen: false },
  { name: "Coastal Bar", description: "Seaside cocktails in a chic setting.", image: DBBBB, rating: 4.5, id: 10, isOpen: true },
  { name: "Tropical Lounge", description: "Relax in a tropical, island-inspired space.", image: DBBBC, rating: 4.2, id: 11, isOpen: true },
  { name: "Platinum Bar", description: "Sophisticated bar for elite clientele.", image: DRR, rating: 4.7, id: 12, isOpen: false },
  { name: "Mystic Bar", description: "Experience a magical vibe with signature drinks.", image: DRS, rating: 4.3, id: 13, isOpen: true },
  { name: "Highland Bar", description: "Rustic charm with a great whisky collection.", image: DRT, rating: 4.0, id: 14, isOpen: false },
  { name: "Emerald Lounge", description: "Luxurious green tones and premium cocktails.", image: DRU, rating: 4.8, id: 15, isOpen: true },
  { name: "Lunar Bar", description: "Futuristic lounge with a space-age design.", image: DRV, rating: 4.6, id: 16, isOpen: true },
  { name: "Eclipse Lounge", description: "Dark, moody atmosphere with exclusive cocktails.", image: DRW, rating: 4.5, id: 17, isOpen: false },
  { name: "Golden Oasis", description: "An oasis of golden luxury and fine spirits.", image: DRX, rating: 4.2, id: 18, isOpen: true },
  { name: "Starry Lounge", description: "A lounge under the stars with signature drinks.", image: DRY, rating: 4.3, id: 19, isOpen: false },
  { name: "Sunset Lounge", description: "Lounge with a panoramic view of the sunset.", image: DRG, rating: 4.6, id: 20, isOpen: true },
];

const Bars = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  const BarCard = ({ image, name, description, rating, id, isOpen }) => {
    return (
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#352208]">{name}</h2>
            <button
              onClick={() => toggleFavorite(id)}
              className={`text-xl ${favorites.includes(id) ? "text-red-500" : "text-gray-500"}`}
            >
              <FaHeart />
            </button>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
          <p
            className={`text-sm font-medium mt-1 ${
              isOpen ? "text-green-600" : "text-red-500"
            }`}
          >
            {isOpen ? "Open now" : "Closed"}
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(rating))}
              {"☆".repeat(5 - Math.round(rating))}
            </span>
            <span className="ml-2 text-gray-500">{rating} / 5</span>
          </div>

          <button className="mt-4 bg-[#352208] text-[#e1bb80] px-4 py-2 rounded-lg hover:bg-[#e1bb80] hover:text-[#352208] transition duration-300">
            Visit Vendor
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Bars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bars.map((bar) => (
          <BarCard
            key={bar.id}
            image={bar.image}
            name={bar.name}
            description={bar.description}
            rating={bar.rating}
            id={bar.id}
            isOpen={bar.isOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Bars;