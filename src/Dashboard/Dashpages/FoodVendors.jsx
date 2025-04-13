import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import MENU1 from '../../assets/MENU1.jpg';
import MENU2 from '../../assets/MENU2.jpg';
import MENU3 from '../../assets/MENU3.jpg';
import MENU4 from '../../assets/MENU4.jpg';
import DEST1 from '../../assets/DEST1.jpg';
import DEST2 from '../../assets/DEST2.jpg';
import DEST3 from '../../assets/DEST3.jpg';
import DEST4 from '../../assets/DEST4.jpg';
import DEST5 from '../../assets/DEST5.jpg';
import DEST6 from '../../assets/DEST6.jpg';
import DEST7 from '../../assets/DEST7.jpg';
import DEST8 from '../../assets/DEST8.jpg';
import CHEF3 from '../../assets/CHEF3.jpg';
import CHEF4 from '../../assets/CHEF4.jpg';
import CHEF5 from '../../assets/CHEF5.jpg';
import CHEF6 from '../../assets/CHEF6.jpg';
import GGGG2 from '../../assets/GGGG2.jpg';
import GGGG3 from '../../assets/GGGG3.jpg';
import GGGG4 from '../../assets/GGGG4.jpg';
import GGGG5 from '../../assets/GGGG5.jpg';


const images = [
  MENU1, MENU2, MENU3, MENU4,
  DEST1, DEST2, DEST3, DEST4, DEST5, DEST6, DEST7, DEST8,
  CHEF3, CHEF4, CHEF5, CHEF6,
  GGGG2, GGGG3, GGGG4, GGGG5
];


const names = [
  "Spice Haven",
  "Ocean Bites",
  "Mama's Kitchen",
  "Grill & Chill",
  "Royal Tastes",
  "Golden Spoon",
  "Lagos Lounge",
  "City Spice",
  "The Local Pot",
  "AfroBites",
  "Food Republic",
  "Urban Chow",
  "Savory Delight",
  "Bistro Bella",
  "Street Treats",
  "Taste Villa",
  "Kitchen Connect",
  "Flavor Hub",
  "Fusion Bowl",
  "Suya City",
  "The Garden Plate",
  "Smoky Chef",
  "Crave Corner",
  "Chef's Table",
  "Chop Spot"
];

const foodVendors = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: names[i],
  description: "Experience delicious meals and top-notch service.",
  image: images[i % images.length],
  rating: (Math.random() * 2 + 3).toFixed(1),
}));

const FoodVendors = () => {
  const [favorites, setFavorites] = useState([]);
  const [openStatuses, setOpenStatuses] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const statusMap = {};
    foodVendors.forEach(vendor => {
      statusMap[vendor.id] = Math.random() < 0.6 ? "Open" : "Closed";
    });
    setOpenStatuses(statusMap);
  }, []);

  const VendorCard = ({ id, image, name, description, rating }) => {
    const isOpen = openStatuses[id] === "Open";

    return (
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-[#352208]">{name}</h2>
            <button
              onClick={() => toggleFavorite(id)}
              className={`text-xl ${favorites.includes(id) ? 'text-red-500' : 'text-gray-500'}`}
            >
              <FaHeart />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(rating))}
              {"☆".repeat(5 - Math.round(rating))}
            </span>
            <span className="text-sm text-gray-500">{rating} / 5</span>
          </div>
          <div className={`mt-2 text-sm font-semibold ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
            {isOpen ? "Open Now" : "Closed"}
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
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Food Vendors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foodVendors.map((vendor) => (
          <VendorCard key={vendor.id} {...vendor} />
        ))}
      </div>
    </div>
  );
};

export default FoodVendors;