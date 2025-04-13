import React from 'react'
import { FaUtensils } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaCocktail } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      title: "Restaurants",
      icon: <FaUtensils className="text-5xl text-[#352208]" />,
      description: "Find top-rated restaurants offering the best cuisine near you.",
      features: ["Fast reservations", "Verified customer reviews", "Exclusive discounts"],
    },
    {
      title: "Hotels",
      icon: <FaHotel className="text-5xl text-[#352208]" />,
      description: "Discover luxury and budget-friendly hotels for your next stay.",
      features: ["Best price guarantee", "Easy check-in", "Top amenities"],
    },
    {
      title: "Bars",
      icon: <FaCocktail className="text-5xl text-[#352208]" />,
      description: "Enjoy the finest cocktails, craft beers, and nightlife.",
      features: ["Live music events", "Signature drinks", "VIP reservations"],
    },
  ];

  const extraServices = [
    {
      title: "Online Ordering & Delivery",
      icon: <FaMotorcycle className="text-5xl text-[#352208]" />,
      description: "Order food online and get it delivered fast.",
      features: ["Live order tracking", "Multiple payment options", "No-contact delivery"],
    },
    {
      title: "Food Photography",
      icon: <FaCamera className="text-5xl text-[#352208]" />,
      description: "High-quality images help you choose your perfect meal.",
      features: ["HD food visuals", "Updated restaurant galleries", "Chef's recommendations"],
    },
    {
      title: "Event Reservations",
      icon: <FaCalendarCheck className="text-5xl text-[#352208]" />,
      description: "Book private dining, hotel events, and bar parties.",
      features: ["Customizable packages", "Exclusive VIP areas", "24/7 availability"],
    },
    {
      title: "Hire a Chef & Catering",
      icon: <FaUserTie className="text-5xl text-[#352208]" />,
      description: "Book top chefs for private dining and event catering.",
      features: ["Custom menus", "Premium catering", "Home dining experiences"],
    },
    {
      title: "Personalized Concierge Services",
      icon: <FaConciergeBell className="text-5xl text-[#352208]" />,
      description: "Enjoy VIP services, reservations, and tailored experiences.",
      features: ["Exclusive dining access", "Personalized itineraries", "24/7 concierge support"],
    },
    {
      title: "24/7 Customer Support",
      icon: <FaHeadset className="text-5xl text-[#352208]" />,
      description: "Get instant support for reservations, orders, and inquiries.",
      features: ["Live chat support", "Phone & email assistance", "Fast response time"],
    },
  ];


  return (
    <>
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#352208] capitalize">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">Connecting you with the best restaurants, hotels, and bars.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-[#352208] text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mt-2">{service.description}</p>
            <ul className="mt-4 space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-[#352208] mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-[#352208]">More Features</h3>
        <p className="text-lg text-gray-600 mt-2">We provide extra services to enhance your experience.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
          {extraServices.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center justify-center mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-[#352208] text-center">{feature.title}</h4>
              <p className="text-gray-600 text-center mt-2">{feature.description}</p>

              <ul className="mt-4 space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-[#352208] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Services