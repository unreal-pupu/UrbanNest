import React from "react";

const categories = [
  {
    title: "Hotels",
    plans: [
      {
        name: " Starter Package (For Small Cafés & Takeaways)",
        price: "$19.99",
        oldPrice: "$49.99",
        features: [
          "🔹 Digital Room Directory – Guests scan QR codes for hotel info, services, and policies.",
          "🔹 Up to 20 QR Codes.",
          "🔹 Get 20% Off Annually",
          "🔹 Online Booking – Guests can check availability and book directly from their phones.",
          
        ],
      },
      {
        name: "Standard",
        price: "$29.99",
        oldPrice: "$69.99",
        features: [
          "🔹 Interactive QR Experience – Guests can access menus.",
          "🔹 Up to 50 QR Codes – Cover rooms, facilities, special services, and dining options.",
          "🔹 Get 20% Off Annually",
          "🔹 Online Booking – Sync with your booking system for real-time availability.",
        ],
      },
      {
        name: "Premium",
        price: "$49.99",
        oldPrice: "$99.99",
        features: [
          "🔹 Unlimited QR Codes.",
          "🔹 Personalized Guest Experience.",
          "🔹 Get 20% Off Annually.",
          "🔹 Room Service Ordering – Guests can place food and amenity requests via QR codes.",
          "🔹 Integrated Online Booking & Payments – Seamless reservation and checkout.",
        ],
      },
    ],
  },
  {
    title: "Restaurants",
    plans: [
      {
        name: " Starter Package (For Small Cafés & Takeaways)",
        price: "$19.99",
        oldPrice: "$39.99",
        features: [
          "🔹 Digital Menu Access – Customers scan QR codes to view your menu instantly.",
          "🔹 Up to 15 QR Codes – Ideal for small cafés and takeout spots.",
          "🔹 Get 20% Off Annually",
          "🔹 Online Ordering – Let customers place orders directly from their phones.",
        ],
      },
      {
        name: "Growth Package (For Mid-Sized Restaurants & Casual Dining)",
        price: "$29.99",
        oldPrice: "$59.99",
        features: [
          "🔹 Interactive QR Menus – Allow customers to browse, filter, and search for dishes.",
          "🔹 Up to 30 QR Codes – Perfect for medium-sized restaurants with multiple tables.",
          "🔹 Get 20% Off Annually",
          "🔹 Online Ordering – Customers can place orders and choose pickup or delivery options.",
          
        ],
      },
      {
        name: " Elite Package (For Fine Dining & High-Traffic Restaurants)",
        price: "$39.99",
        oldPrice: "$89.99",
        features: [
          "🔹 Unlimited QR Codes – Assign unique codes to tables, menus, and special promotions.",
          "🔹 Multi-Location Support – Manage menus across different branches with one account.",
          "🔹 Get 20% Off Annually",
          "🔹 VIP Branding & Customization – Fully white-labeled menus with advanced design options.",
          "🔹 Advanced Online Ordering – Integrate with delivery services and enable table-side ordering.",
        ],
      },
    ],
  },
  {
    title: "Bars",
    plans: [
      {
        name: "Menu Integration Fee",
        price: "$100",
        features: [
          "🔹 Get 3 Months Free on premium features when you register today!",
          "🔹 Generate unlimited QR codes for menus, reservations, and promotions at no extra cost!",
          "🔹 Unlock exclusive discounts on partner services (food suppliers, barware, hotel essentials).",
          "🔹 Enjoy priority support and early feature releases before anyone else!",
        ],
      },
      {
        name: "Gold",
        price: "$39.99",
        oldPrice: "$49.99",
        features: [
          "🔹 Digital Drink Menu – Customers scan a QR code to view your full cocktail and beverage list.",
          "🔹 Up to 20 QR Codes – Assign codes to tables, bar counters, and VIP sections.",
          "🔹 Online Ordering – Customers can place orders directly from their phones.",
        ],
      },
      {
        name: "Platinum",
        price: "$69.99",
        oldPrice: "$79.99",
        features: [
          "🔹 Interactive QR Code Menu – Showcase drink specials, happy hours, and exclusive offers.",
          "🔹 Up to 50 QR Codes.",
          "🔹 Table Service Ordering – Customers can order and request service without leaving their seats.",
          "🔹 Seamless Online Ordering- Guests can order digitally for a hassle-free",
        ],
      },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      {categories.map((category, index) => (
        <div key={index} className="w-full max-w-6xl mb-12">
          <h1 className="text-4xl font-bold text-[#352208] text-center mb-8">
            {category.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-8">
            {category.plans.map((plan, idx) => (
              <PricingCard key={idx} {...plan} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PricingCard = ({ name, price, oldPrice, features }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center transition-transform duration-300 hover:-translate-y-4">
      <div className="bg-[#e1bb80] text-[#352208] uppercase font-bold py-2 rounded-t-lg">
        Best Offer
      </div>

      <h3 className="text-2xl font-bold text-[#352208] mt-4">{name}</h3>
      <div className="text-gray-600 mt-2">Exclusive features</div>

      <div className="text-gray-500 line-through mt-4 text-lg">{oldPrice}</div>
      <div className="text-3xl font-bold text-[#352208]">{price}</div>

      <div className="text-gray-500 text-sm">/ month</div>

      <ul className="text-gray-700 mt-6 space-y-3 text-sm text-left">
        {features.map((feature, index) => (
          <li
            key={index}
            className="relative pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:bg-no-repeat before:bg-center before:bg-[url('/assets/circle-check.svg')]"
          >
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="/signup"
        className="mt-6 inline-flex items-center justify-center w-full text-[#352208] bg-[#e1bb80] px-6 py-3 rounded-lg font-bold tracking-wide transition duration-300 hover:bg-blue-700"
      >
        Enroll Now
      </a>
    </div>
  );
};

export default Pricing;