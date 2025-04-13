import React from "react";
import NBD from "../assets/NBD.jpg";
import CHBBRR from "../assets/CHBBRR.jpg";
import BBARR from "../assets/BBARR.jpg";
import STRE from "../assets/STRE.jpg";
import PLANE from "../assets/PLANE.jpg";
import CHEAP from "../assets/CHEAP.jpg";
import HOSTE from "../assets/HOSTE.jpg";
import LAKE from "../assets/LAKE.jpg";
import RESTO from "../assets/RESTO.jpg";
import FEST from "../assets/FEST.jpg";
import TSAF from "../assets/TSAF.jpg";
import CONT12 from '../assets/CONT12.jpg'

const Features = () => {
  const blogPosts = [
    { id: 1, title: "Delicious Foods to Try", image: CONT12, category: "Food", content: "Indulge in a world of flavors with must-try dishes from around the globe. From sizzling street food to gourmet delicacies, every bite tells a story of culture and tradition. Whether you're craving something sweet, savory, or spicy, there's always a delicious new experience waiting for you!." },
    { id: 2, title: "Top Restaurants in Town", image: CHBBRR, category: "Restaurant", content: "Discover the best restaurants that offer mouthwatering dishes, cozy atmospheres, and exceptional service. Whether you’re looking for fine dining, casual eateries, or hidden gems, these restaurants promise a delightful culinary experience for every occasion" },
    { id: 3, title: "Best Bars for Cocktails", image: BBARR, category: "Bar", content: "Unwind and enjoy the vibrant nightlife at the best bars in town. From craft cocktails and fine wines to live music and a lively atmosphere, these bars offer the perfect setting for a night out with friends or a relaxed evening after a long day" },
    { id: 4, title: "Luxury Hotels You’ll Love", image: STRE, category: "Hotel", content: "Experience the ultimate comfort and elegance at luxury hotels that redefine hospitality. With world-class amenities, stunning interiors, and top-tier service, these hotels offer a perfect retreat for relaxation, business, or a lavish getaway" },
    { id: 5, title: "Nightlife Adventures", image: NBD, category: "Nightlife", content: "Experience the excitement of nightlife with buzzing clubs, rooftop lounges, and live music venues. Whether you're dancing the night away, enjoying signature cocktails, or exploring late-night street food, the city comes alive after dark with endless entertainment." },
    { id: 6, title: "Travel Tips for Tourists", image: TSAF, category: "Travel", content: "Make your travels stress-free with essential tips for a smooth journey. From packing smart and finding budget-friendly deals to exploring hidden gems and staying safe, these travel tips will help you make the most of your adventures." },
    { id: 7, title: "Upcoming Local Events", image: FEST, category: "Events", content: "Don't miss out on the most exciting local events happening near you! From food festivals and live music to cultural celebrations and community gatherings, there’s always something fun and engaging to explore in your city." },
    { id: 8, title: " Best Budget Hotels for Your Next Trip", image: CHEAP, category: "Events", content: "Finding budget-friendly accommodation doesn’t mean sacrificing comfort. Discover tips on booking cheap hotels, from using comparison websites and off-season travel to exploring hostels and boutique stays that offer great value for money" },
    { id: 9, title: "Romantic Resorts Perfect for Honeymooners", image: RESTO, category: "Events", content: "Escape to paradise with these breathtaking resorts, designed for romance and unforgettable honeymoon experiences. From overwater bungalows with stunning ocean views to secluded mountain retreats, these destinations offer the perfect mix of luxury, privacy, and serenity. Indulge in candlelit dinners, relaxing spa treatments, and scenic sunset walks as you create memories that last a lifetime. Whether on a tropical island or a cozy lakeside retreat, these resorts set the stage for the perfect honeymoon getaway" },
    { id: 10, title: "Hidden Lake Destinations for a Perfect Weekend Getaway", image: LAKE, category: "Events", content: "Escape the hustle and bustle and unwind at these serene hidden lake destinations. Surrounded by breathtaking nature, these peaceful retreats offer the perfect spot for relaxation, kayaking, fishing, or simply soaking in the tranquil views. Whether you’re looking for a romantic escape or an adventure-filled weekend, these secluded lakes provide the ultimate getaway experience" },
    { id: 10, title: "Tips for the Modern Explorer", image: HOSTE, category: "Events", content: "Travel smarter and make the most of every adventure with these essential tips. From packing efficiently and finding budget-friendly stays to navigating new destinations with ease, these insights will help you explore the world like a pro. Stay prepared, stay curious, and embrace the journey ahead!" },
    { id: 10, title: "Wanderlust Unleashed: Exploring the World's Hidden Gem", image: PLANE, category: "Events", content: "Step off the beaten path and discover breathtaking destinations that remain untouched by the crowds. From secluded beaches to charming villages, these hidden gems offer unforgettable experiences for the true explorer. Adventure awaits—where will your wanderlust take you next?" }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#352208]">Latest News & Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <span className="text-sm text-[#352208] font-semibold">{post.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;